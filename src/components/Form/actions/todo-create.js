import { Api } from "@/api";
import { NEW_TODO_ERROR, NEW_TODO_CHANGE, NEW_TODO_LOADING } from "@/components/Form/store";
import { TODOS_APPEND } from "@/components/Todos/store";

export const todoCreate = ({
  commit,
  state: { newTodoText = '', todosError, newTodoError },
  dispatch,
}) => {
  commit(NEW_TODO_LOADING, true)
  Api
    .post('todos', {
      json: {
        title: newTodoText
      }
    })
    .json()
    .then(({ data }) => {
      commit(NEW_TODO_ERROR, false)
      commit(NEW_TODO_CHANGE, '')
      if (todosError || newTodoError) {
        dispatch('todosFetch')
      } else {
        commit(TODOS_APPEND, data)
      }
    })
    .catch(() => {
      commit(NEW_TODO_ERROR, true)
    })
    .finally(() => {
      commit(NEW_TODO_LOADING, false)
    })
}
