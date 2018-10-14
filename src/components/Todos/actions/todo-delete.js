import { Api } from "@/api";
import { TODOS_GET, TODOS_DELETE } from "@/components/Todos/store";

export const todoDelete = ({
  commit,
  state: { todosError, newTodoError },
}, { id }) => {
  Api
    .delete(`todos/${id}`)
    .json()
    .then(({ data }) => {
      if (todosError || newTodoError) {
        commit(TODOS_GET, data)
      } else {
        commit(TODOS_DELETE, id)
      }
    })
    .catch(() => { })
}
