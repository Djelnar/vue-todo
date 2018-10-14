let fakeData = [
  {
    id: 1,
    title: 'Be cool',
    completed: true,
  },
  {
    id: 2,
    title: 'Some todo',
    completed: false,
  },
  {
    id: 3,
    title: 'Some another todo',
    completed: false,
  },
]

export const getTodos = () => [...fakeData]

export const createTodo = (title) => {
  const todo = { id: Date.now(), title, completed: false }

  fakeData = [...fakeData, todo]

  return todo
}

export const updateTodo = (id, title) => {
  fakeData = fakeData.map((todo) => (
    todo.id === Number(id) ? { ...todo, title } : todo
  ))

  return fakeData
}

export const toggleTodo = (id) => {
  fakeData = fakeData.map((todo) => (
    todo.id === Number(id) ? { ...todo, completed: !todo.completed } : todo
  ))

  return fakeData
}

export const deleteTodo = (id) => {
  fakeData = fakeData.filter((todo) => todo.id !== Number(id))

  return fakeData
}
