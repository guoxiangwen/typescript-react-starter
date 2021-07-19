import * as cp from "child_process";
import open from "open";
import webpack from "webpack";
import wds from "webpack-dev-server";

import genEnv, { Env } from "./../config/env";
import { PUBLIC_FOLDER } from "../config/path";
import webpackConfig from "../config/webpack.config";

// default local env
const { HOST, PORT, PUBLIC_URL } = genEnv("local");
const compiler = webpack(webpackConfig("local") as any);
const server = new wds(
  compiler,
  Object.assign({
    contentBase: PUBLIC_FOLDER,
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true,
    overlay: true,
    publicPath: PUBLIC_URL,
    https: false,
    stats: {
      assets: false,
      builtAt: true,
      colors: true,
      entrypoints: false,
      hash: false,
      modules: false,
      performance: false,
    },
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 1000,
    },
    proxy: {
      "/kic-ops-center": {
        target: "http://10.8.8.23:35015",
        secure: false,
        changeOrigin: true,
        pathRewrite: { "^/kic-ops-center": "" },
      },
      "/kic-erp-data-center": {
        target: "http://10.8.8.23:7106",
        secure: false,
        changeOrigin: true,
        pathRewrite: { "^/kic-erp-data-center": "" },
      },
      "/kic-goods-center": {
        target: "http://10.8.8.23:7109",
        secure: false,
        changeOrigin: true,
        pathRewrite: { "^/kic-goods-center": "" },
      },
    },
  })
);

server.listen(Number(PORT), HOST, async () => {
  const url = `http://localhost:${Number(PORT)}${process.env.PUBLIC_URL || ""}`;
  try {
    await open(url, {
      app: { name: open.apps.chrome },
    });
  } catch (err) {
    console.warn(`Open broswer failed, please open ${url} by your self.`);
  }
});

process.on("SIGINT", () => {
  server.close();
  process.exit();
});
process.on("SIGTERM", () => {
  server.close();
  process.exit();
});
