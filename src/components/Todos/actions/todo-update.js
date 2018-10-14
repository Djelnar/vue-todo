import { Api } from "@/api";
import { TODOS_GET, TODOS_UPDATE } from "@/components/Todos/store";

export const todoUpdate = ({
  commit,
  state: { todosError, newTodoError },
}, { id, title }) => {
  Api
    .put(`todos/${id}`, {
      json: { title }
    })
    .json()
    .then(({ data }) => {
      if (todosError || newTodoError) {
        commit(TODOS_GET, data)
      } else {
        commit(TODOS_UPDATE, { id, title })
      }
    })
    .catch(() => { })
}
