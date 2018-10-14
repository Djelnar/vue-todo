import express from 'express'
import { index, create, update, destroy, toggle } from './controller.mjs'


export const routes = express.Router()
  .get('/todos', index)
  .post('/todos', create)
  .put('/todos/:id', update)
  .put('/todos/:id/toggle', toggle)
  .delete('/todos/:id', destroy)
