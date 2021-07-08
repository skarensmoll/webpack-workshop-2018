const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({mode, presets} = { mode: 'production', presets: [] }) => {
  console.log({mode});

  return {
    mode,
    output: {
      filename: 'bundle.js'
    },
    plugins: [
      new HTMLWebpackPlugin(),
      new webpack.ProgressPlugin()
    ]
  }
};
