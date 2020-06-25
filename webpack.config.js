const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /(ts|tsx|js)/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
    hot: true,
    open: true
  }
}
