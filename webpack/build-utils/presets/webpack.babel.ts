import { PresetFn } from './types'

export type BabelPreset = 'babel'

const config: PresetFn = () => {
  return {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              // https://webpack.js.org/loaders/babel-loader
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
  }
}

export default config
