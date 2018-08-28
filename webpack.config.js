const path = require('path');
const SizePlugin = require('size-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports =  {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  devtool: 'eval',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {test: /\.ts(x)?$/, enforce: 'pre', loader: 'tslint-loader'},
      {test: /\.ts(x)?$/, loader: 'ts-loader'},
      {
        test: /\.css$/,
        exclude: ['/node_modules/', '/assets/'],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {importLoaders: 1}},
            {loader: 'postcss-loader', options: {sourceMap: true}}
          ],
          publicPath: '/'
        })
      },
      {test: /\.(svg|png|jpg|gif)$/, loader: 'file-loader'},
      {test: /\.(ttf)$/, loader: 'file-loader', options: {name: '[name].[ext]', outputPath: 'fonts/'}}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html')
    }),
    new ExtractTextPlugin({
      filename: 'main.css'
    }),
    new SizePlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, '/build'),
    watchOptions: {
      ignored: /node_modules/
    }
  }
};
