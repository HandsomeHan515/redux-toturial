var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
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
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", {
          loader: "css-loader",
          options: {
            minimize: true
          }
        }, "postcss-loader", "sass-loader"],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],

  devServer: {
    historyApiFallback: true,
    inline: true,
    // hot: true, 设置后会导致编译不出来，webpack默认已开启热更新
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    port: 8080
  }
}