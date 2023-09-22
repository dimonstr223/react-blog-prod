import {BuildOptions} from "./types/config";
import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // "style-loader", //заменил на MiniCssExtractPlugin (создает файл css в build)
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            // модульные классы только в файлах scss с '.module.'
            auto: /\.module\./,
            // наименование классов при dev / prod сборке
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          },
        }
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  }

  return [
    tsLoader,
    cssLoader
  ]
}
