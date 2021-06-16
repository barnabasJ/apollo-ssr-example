import { Configuration } from 'webpack'

import { Env } from '../../../src/webpack.config'

import { BabelPreset } from './webpack.babel'
import { BasePreset } from './webpack.base'
import { NodemonPreset } from './webpack.nodemon'
import { ServePreset } from './webpack.serve'
import { TsConfigPathsPreset } from './webpack.tsconfigpaths'

/**
 * A preset function always gets the environment and an optional options object
 * if the user specifies it
 */
export type PresetFn<S = void> = (env: Env, options?: S) => Configuration

/**
 * Allows Typescript to check both the preset and its options
 */
export type Presets =
  | BasePreset
  | ServePreset
  | BabelPreset
  | NodemonPreset
  | TsConfigPathsPreset
