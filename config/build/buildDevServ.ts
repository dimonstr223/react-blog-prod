import {BuildOptions} from "./types/config";
import { Configuration as DevServerConfig } from 'webpack-dev-server'

export const buildDevServ = ({ port }: BuildOptions): DevServerConfig => {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
