import {BuildOptions} from "./types/config";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {ProgressPlugin, WebpackPluginInstance} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
  ]
}
