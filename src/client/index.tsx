import React from 'react'
import { hydrate } from 'react-dom'

import { App } from './app'

const div = document.getElementById('root')

if (div) {
  hydrate(<App />, div)
}

// if blocks like this are removed from the code in production builds
if (process.env['NODE_ENV'] === 'development') {
  if (module.hot && div) {
    module.hot.accept('./app', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const NextApp = require('./app').App
      hydrate(<NextApp />, div)
    })
  }
}
