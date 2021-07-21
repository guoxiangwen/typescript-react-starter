import { PUBLIC_FOLDER } from "./path";
import genEnv, { Env } from "./env";

// default local env
const { PUBLIC_URL } = genEnv("local");

export default {
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
};
