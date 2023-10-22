import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildCssLoader = (isDev: boolean) => ({
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
        }
      }
    },
    // Compiles Sass to CSS
    'sass-loader'
  ]
})
