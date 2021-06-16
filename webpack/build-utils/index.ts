import merge from 'lodash/merge'
import concat from 'lodash/concat'

import { Env } from '../../webpack.config'

import { Presets } from './presets/types'

/**
 * Adds preset to the env object
 *
 * @param env - the environment to append the presets to
 * @param presets - the presets to append
 * @returns - the new environment with all presets
 */
export function addPresets(env: Readonly<Env>, presets: Presets[]): Env {
  return merge({}, env, {
    presets: concat(env.presets, presets),
  })
}
