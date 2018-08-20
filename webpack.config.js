module.exports =  {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/build',
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
  mode: 'development'
};
