module.exports = () => ({
  module: {
    rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'] //remember that this is from right to left.
        }
      ]
  }
})
