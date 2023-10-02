import { BuildEnv, BuildPaths } from './config/build/types/config'

import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import path from 'path'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })

  return config
}

// NON-DECOMPOSED WEBPACK-CONFIG

// import  path from 'path'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
// import webpack from 'webpack'
//
// const config: webpack.Configuration = {
//   mode: 'development',
//   entry: path.resolve(__dirname, 'src', 'index.ts'),
//   output: {
//     filename: '[name].[contenthash].js',
//     path: path.resolve(__dirname, 'build'),
//     clean: true
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, 'public', 'index.html')
//     }),
//     new webpack.ProgressPlugin(),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js']
//   },
//   devServer: {
//     port: 3000,
//     open: true
//   }
// }
//
// export default  config
