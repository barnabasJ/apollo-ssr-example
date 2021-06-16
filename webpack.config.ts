import { Configuration } from 'webpack'
import compact from 'lodash/compact'
import concat from 'lodash/concat'
import map from 'lodash/map'
import split from 'lodash/split'
import trim from 'lodash/trim'

import { Presets } from './webpack/build-utils/presets/types'
import clientConfig from './webpack/webpack.client'
import serverConfig from './webpack/webpack.server'

delete process.env['TS_NODE_PROJECT'] // needed to make sure other loaders don't use the tsconfig version from the environment

/**
 * The environment
 *
 * This object is also passed down to all presets
 */
export type Env = {
  mode: 'production' | 'development'
  presets: Presets[]
  type?: 'client' | 'server'
  target?: 'client' | 'server'
  watch: boolean
}

/**
 * The default environment
 *
 * Presets that are both used on the server and client
 * can be added here
 */
const defaultEnv: Env = {
  mode: 'production',
  presets: ['base', 'babel', 'tsconfigpaths'],
  watch: false,
}

/**
 * Args already parsed by webpack and passed to the config function
 */
type Args = {
  color?: boolean
  watch?: boolean
}

/**
 * Entry point for webpack
 */
function config(
  { presets, ...rest }: Record<string, string> = {},
  args: Args = {}
): Configuration[] {
  const env: Env = Object.assign({}, defaultEnv, rest, {
    presets: compact(
      concat<Presets>(
        map(split(presets, ','), trim) as Presets[],
        defaultEnv.presets
      )
    ),
    watch: !!args.watch,
  })
  const sConfig = serverConfig(env)
  const cConfig = clientConfig(env)
  // console.log(cConfig)
  return [sConfig, cConfig]
}

export default config
