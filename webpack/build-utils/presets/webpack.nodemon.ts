import NodemonPlugin from 'nodemon-webpack-plugin'

import { PresetFn } from './types'

export type NodemonPreset = 'nodemon' | ['nodemon', Options]

type Options = ConstructorParameters<typeof NodemonPlugin>[0]

/**
 * Adds the nodemon plugin, the settings for nodemon should be passed
 * into the preset if needed
 */
const config: PresetFn<Options> = (_, settings) => {
  return {
    plugins: [
      /**
       * if adding `watch`, ensure only generated files are watched:
       *
       * ```
       * watch: resolve('./build'),
       * ```
       * @see https://medium.com/@binyamin/get-nodemon-to-restart-after-webpack-re-build-8746db80548e
       */
      new NodemonPlugin(settings),
    ],
  }
}

export default config
