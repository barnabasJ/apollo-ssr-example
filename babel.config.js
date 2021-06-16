// caller.target will be the same as the target option from webpack
// https://webpack.js.org/loaders/babel-loader/#customize-config-based-on-webpack-target
function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web')
}

function isTestBuild(caller) {
  return Boolean(caller && caller.name === 'babel-jest')
}

module.exports = (api) => {
  const isWeb = api.caller(isWebTarget)
  const isTest = api.caller(isTestBuild)

  const targets =
    isWeb && !isTest
      ? '> 0.25%, not dead'
      : {
          node: 'current',
        }

  /**
   * optimize the build process performance by caching config function execution
   * result
   * @see https://babeljs.io/docs/en/config-files#apicache
   */
  api.cache(false) // can not be true, otherwise we cache the server config and use it for the client

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets,
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  }
}
