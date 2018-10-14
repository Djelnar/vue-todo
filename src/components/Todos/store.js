export const initialState = {
  todos: [],
  todosLoading: false,
  todosLoaded: false,
  todosError: false,
}

export const TODOS_GET = 'TODOS_GET'
export const TODOS_LOADING = 'TODOS_LOADING'
export const TODOS_LOADED = 'TODOS_LOADED'
export const TODOS_ERROR = 'TODOS_ERROR'
export const TODOS_APPEND = 'TODOS_APPEND'
export const TODOS_DELETE = 'TODOS_DELETE'
export const TODOS_UPDATE = 'TODOS_UPDATE'
export const TODOS_TOGGLE = 'TODOS_TOGGLE'


export const mutations = {
  [TODOS_GET](state, payload) {
    state.todos = payload
  },
  [TODOS_LOADING](state, payload) {
    state.todosLoading = payload
  },
  [TODOS_LOADED](state, payload) {
    state.todosLoaded = payload
  },
  [TODOS_ERROR](state, payload) {
    state.todosError = payload
  },
  [TODOS_APPEND](state, payload) {
    state.todos.push(payload)
  },
  [TODOS_DELETE](state, payload) {
    state.todos = state.todos
      .filter(todo => todo.id !== payload)
  },
  [TODOS_TOGGLE](state, { id }) {
    state.todos = state.todos.map((todo) => (
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ))
  },
}
