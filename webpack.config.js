const path = require('path')

module.exports = {
  entry: "./client/app/app.module.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            include: [
              path.join(__dirname, 'client/app'),
              path.join(__dirname, 'client/spec')
            ]
        },
        { test: /\.html$/, loader: "html-loader" },
        { test: /\.css$/, loader: "style!css" }
      ]
  },
  devtool: "#inline-source-map"
}
