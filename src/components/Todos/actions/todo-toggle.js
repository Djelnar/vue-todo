import { Api } from "@/api";
import { TODOS_GET, TODOS_TOGGLE } from "@/components/Todos/store";

export const todoToggle = ({
  commit,
  state: { todosError, newTodoError },
}, { id }) => {
  Api
    .put(`todos/${id}/toggle`)
    .json()
    .then(({ data }) => {
      if (todosError || newTodoError) {
        commit(TODOS_GET, data)
      } else {
        commit(TODOS_TOGGLE, { id })
      }
    })
    .catch(() => { })
}
