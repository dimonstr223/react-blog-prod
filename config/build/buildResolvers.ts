import {BuildOptions} from "./types/config";
import {ResolveOptions} from 'webpack'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    // для абсолютных импортов (до alias вкл.)
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
