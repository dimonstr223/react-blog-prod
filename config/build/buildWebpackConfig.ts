import { BuildOptions } from "./types/config"
import { buildPlugins } from "./buildPlugins"
import { Configuration } from "webpack"
import { buildLoaders } from "./buildLoaders"
import { buildResolvers } from "./buildResolvers"
import { buildDevServ } from "./buildDevServ"

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServ(options) : undefined
  }
}
