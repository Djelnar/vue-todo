export const initialState = {
  newTodoText: '',
  newTodoLoading: false,
  newTodoError: false,
}

export const NEW_TODO_CHANGE = 'NEW_TODO_CHANGE'
export const NEW_TODO_LOADING = 'NEW_TODO_LOADING'
export const NEW_TODO_ERROR = 'NEW_TODO_ERROR'


export const mutations = {
  [NEW_TODO_CHANGE](state, payload = '') {
    state.newTodoText = payload
  },
  [NEW_TODO_LOADING](state, payload) {
    state.newTodoLoading = payload
  },
  [NEW_TODO_ERROR](state, payload) {
    state.newTodoError = payload
  }
}
