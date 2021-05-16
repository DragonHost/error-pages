const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/css/app.css',
  mode: process.env.NODE_ENV,
  output: {
    publicPath: 'https://error-pages.dragonhost.uk-lon1.upcloudobjects.com/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
            'postcss-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      disable: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'src/404.html',
    }),
    new HtmlWebpackPlugin({
      filename: '500.html',
      template: 'src/500.html',
    }),
  ],
}