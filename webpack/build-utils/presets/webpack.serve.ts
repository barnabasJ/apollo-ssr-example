import { join } from 'path'

import {
  WebpackPluginServe,
  WebpackPluginServeOptions,
} from 'webpack-plugin-serve'
import merge from 'lodash/merge'

import { PresetFn } from './types'

export type ServePreset = 'serve' | ['serve', WebpackPluginServeOptions]

const defaultOptions: WebpackPluginServeOptions = {
  static: [
    join(process.cwd(), './dist/client'),
    join(process.cwd(), './dist/client/static'),
  ],
  waitForBuild: true,
}

/**
 * Genereric base config
 */
const config: PresetFn<WebpackPluginServeOptions> = (_, o = {}) => {
  return {
    // an example entry definition
    entry: {
      main: ['webpack-plugin-serve/client'], // ← important: this is required, where the magic happens in the browser
    },
    plugins: [new WebpackPluginServe(merge({}, defaultOptions, o))],
  }
}

export default config
