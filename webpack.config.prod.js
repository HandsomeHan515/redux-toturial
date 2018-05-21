var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", {
          loader: "css-loader",
          options: {
            minimize: true
          }
        }, "postcss-loader", "sass-loader"],
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html'
    })
  ],
  devtool: "source-map",
}