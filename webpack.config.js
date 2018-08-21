const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  devtool: 'eval',
  resolve: {
    extensions: ['.webpack.js', '.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {test: /\.ts(x)?$/, loader: 'ts-loader'}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '/build'),
    watchOptions: {
      ignored: /node_modules/
    }
  }
};
