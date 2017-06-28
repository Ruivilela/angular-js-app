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
        },
        { test: /\.html$/, loader: "html-loader" },
        { test: /\.css$/, loader: "style!css" }
      ]
  },
  devtool: "#inline-source-map"
}
