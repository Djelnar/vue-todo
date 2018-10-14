import { getTodos, createTodo, updateTodo, deleteTodo, toggleTodo } from './model.mjs'


export const index = (_, res) => res.json({ data: getTodos() })

export const create = (req, res) => {
  const { title } = req.body

  return res.json({ data: createTodo(title) })
}

export const update = (req, res) => {
  const { title } = req.body
  const { id } = req.params

  return res.json({ data: updateTodo(id, title) })
}

export const toggle = (req, res) => {
  const { id } = req.params

  res.json({ data: toggleTodo(id) })
}

export const destroy = (req, res) => {
  const { id } = req.params

  return res.json({ data: deleteTodo(id) })
}
