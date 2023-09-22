import {BuildOptions} from "./types/config";
import {ResolveOptions} from 'webpack'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: ['/', 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
