const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const {merge} = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return merge(
    {
      mode,
      module:{
        rules: [
          {
            test: /\.jpg/,
            use: [{ loader: "url-loader", options: { limit: 5000 } }]
          }
        ]
      },
      plugins: [
        new HTMLWebpackPlugin(),
        new webpack.ProgressPlugin()
      ],
    },
    modeConfig(mode),
    presetConfig({mode, presets})
  );
}



