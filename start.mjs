import express from 'express'
import bodyParser from 'body-parser'

import { routes as todoRoutes } from './server/todo/routes.mjs'


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
}))
/* global process */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'))
}
app.use('/api', todoRoutes)

const { PORT } = process.env

app.listen(PORT, '0.0.0.0', undefined, () => {
  console.log(`http://localhost:${PORT}`) // eslint-disable-line
})
