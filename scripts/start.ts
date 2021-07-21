import * as cp from "child_process";
import open from "open";
import webpack from "webpack";
import wds from "webpack-dev-server";

import genEnv from "./../config/env";
import webpackConfig from "../config/webpack.config";
import webpackDevServerConfig from "../config/webpackDevServerConfig";

// default local env
const { HOST, PORT } = genEnv("local");
const compiler = webpack(webpackConfig("local") as any);
const server = new wds(compiler, webpackDevServerConfig);

// run webpack-dev-server
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
