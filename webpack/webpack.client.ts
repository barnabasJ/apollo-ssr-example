import { join } from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import concat from 'lodash/concat'

import { Env } from '../webpack.config'

import { addPresets } from './build-utils'
import loadPresets from './build-utils/presets'
import { Presets } from './build-utils/presets/types'

const PRESETS: Presets[] = []
const DEV_PRESETS: Presets[] = concat([], PRESETS, ['serve'])
const PRODUCTION_PRESETS: Presets[] = PRESETS

function config(env: Env): Configuration {
  return merge(
    {
      entry: {
        main: ['./src/client/index.tsx'],
      },
      plugins: [new HtmlWebpackPlugin({ template: './src/client/index.html' })],
      target: 'web',
      output: {
        filename: '[name].[contenthash].js',
        path: join(process.cwd(), './dist/client/static'),
        publicPath: 'static/',
      },
    },
    loadPresets(
      addPresets(
        env,
        env.mode === 'production' ? PRODUCTION_PRESETS : DEV_PRESETS
      )
    )
  )
}

export default config
