/* eslint-disable @typescript-eslint/no-var-requires */
import { resolve } from 'path'

import webpackMerge from 'webpack-merge'
import map from 'lodash/map'
import uniqBy from 'lodash/uniqBy'
import { Configuration } from 'webpack'

import { Env } from '../../../webpack.config'

/**
 * Loads the presets from the file system
 *
 * Presets must have the following file naming convention:
 * `webpack.<preset-name>.ts`
 *
 * @param env - the environment containing the wanted presets
 * @returns - the merged config from all presets
 */
function loadPresets(env: Env): Configuration {
  const presets = uniqBy(env.presets, (preset) => {
    if (typeof preset === 'string') {
      return preset
    }
    return preset[0]
  })
  return webpackMerge(
    map(presets, (preset) => {
      if (typeof preset === 'string') {
        return require(resolve(__dirname, `./webpack.${preset}`)).default(env)
      }
      return require(resolve(__dirname, `./webpack.${preset[0]}`)).default(
        env,
        preset[1]
      )
    })
  )
}

export default loadPresets
