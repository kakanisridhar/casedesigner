const paths = require('../paths')
const { merge } = require('webpack-merge')
const common = require('./common')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: {
      import: `${paths.src}/index.tsx`,
      dependOn: ['react', 'helpers'],
    },
    react: ['react', 'react-dom', 'prop-types'],
    helpers: ['immer', 'nanoid'],
  },
  devtool: false,
  output: {
    filename: 'js/[name].[hash].bundle.js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: '[id].css',
    }),

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})
