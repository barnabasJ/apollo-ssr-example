import { join } from 'path'
import { readFile } from 'fs'

import { getDataFromTree } from '@apollo/client/react/ssr'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Response, Request } from 'express'
import serialize from 'serialize-javascript'

import { staticPath } from '.'

import { createApolloClient } from '@client/apollo'
import { App } from '@client/app'

export async function renderer(_: Request, res: Response): Promise<void> {
  readFile(join(staticPath, 'index.html'), 'utf8', async (err, data) => {
    if (err) {
      console.error('could not read index file', err)
      res.status(500).send('could not read index file')
    }

    const client = createApolloClient({ ssrMode: true })

    await getDataFromTree(<App client={client} />)

    const app = renderToString(<App client={client} />)

    res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        .replace(
          '<style id="mui-styles"></style>',
          `<script id="apollo-state">window.__APOLLO_STATE__=${serialize(
            client.extract()
          )};</script>`
        )
    )
  })
}
