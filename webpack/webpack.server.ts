import { join } from 'path'

import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import nodeExternals from 'webpack-node-externals'

import { Env } from '../webpack.config'

import { addPresets } from './build-utils'
import loadPresets from './build-utils/presets'
import { Presets } from './build-utils/presets/types'

const PRESETS: Presets[] = [
  [
    'nodemon',
    {
      watch: ['src'],
      ext: 'json,ts,tsx',
      ignore: [
        '__tests__/*',
        '__stories__/*',
        '*.js',
        '*.js.map',
        '*.d.ts',
        '*.md',
      ],
      delay: 1000,
    },
  ],
]

function config(env: Env): Configuration {
  return merge(
    {
      entry: {
        main: './src/server/index.ts',
      },
      target: 'node',
      output: {
        filename: 'server.js',
        path: join(process.cwd(), './dist/server'),
      },
      externalsPresets: { node: true },
      externals: [nodeExternals()] as Configuration['externals'], // needed because the types from the @types repo still target webpack 4 types, should be fixed with the next release of webpack-node-externals because they now generate a types file themselves
    },
    loadPresets(addPresets(env, PRESETS))
  )
}

export default config
