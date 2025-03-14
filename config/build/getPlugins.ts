import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack, {WebpackPluginInstance} from 'webpack'
import {ConfigOptions} from './configOptions'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function getPlugins(options: ConfigOptions): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({ template:  options.paths.htmlPath}),
    new webpack.ProgressPlugin(),
    !options.isDev && new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: options.isDev
    })
  ].filter(Boolean)
}
