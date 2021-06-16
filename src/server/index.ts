import { join } from 'path'

import 'cross-fetch/polyfill'
import express from 'express'

import { renderer } from './renderer'

export const staticPath =
  process.env['NODE_ENV'] === 'production'
    ? join(__dirname, '../client/static/')
    : join(process.cwd(), './dist/client/static/')

const app = express()

app.get('/', renderer)

app.use('/static/', express.static(staticPath))

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
