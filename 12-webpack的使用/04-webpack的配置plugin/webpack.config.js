const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
    // publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 使用多个loader时，是从右向左读取的
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //当加载的图片，小于limit时，会将图片编译成base64字符串形式
              //当加载的图片，大于limit时，需要使用file-loader模块
              limit: 18000
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new webpack.BannerPlugin("最终版权归aaa所有"),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new UglifyjsWebpackPlugin()
  ],
  devServer:{
    contentBase:'./dist',
    inline:true 
  }
};