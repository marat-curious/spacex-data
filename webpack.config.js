module.exports =  {
  entry: './src/index.tsx',
  output: {
    filename: './public/bundle.js'
  },
  devtool: 'eval',
  resolve: {
    extensions: ['.webpack.js', '.tsx', '.ts', '.js']
  },
  module: {
    loaders: [
      {test: /\.ts(x)?$/, loader: 'ts-loader'}
    ]
  }
};
