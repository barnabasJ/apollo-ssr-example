import { PresetFn } from './types'

export type BasePreset = 'base'

/**
 * Genereric base config
 */
const config: PresetFn = (e) => {
  return e.mode === 'production'
    ? {
        mode: 'production',
        devtool: 'nosources-source-map',
      }
    : {
        mode: 'development',
        devtool: 'source-map',
      }
}

export default config
