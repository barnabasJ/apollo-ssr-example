import { join } from 'path'

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

import { PresetFn } from './types'

export type TsConfigPathsPreset = 'tsconfigpaths'

/**
 * Configures webpack to be able to import files with import
 * aliases from the tsconfig
 */
const config: PresetFn = () => {
  return {
    resolve: {
      plugins: [
        new TsconfigPathsPlugin({
          configFile: join(process.cwd(), './tsconfig.json'),
        }),
      ],
    },
  }
}

export default config
