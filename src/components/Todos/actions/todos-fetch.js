import { Api } from "@/api";
import { TODOS_LOADING, TODOS_GET, TODOS_LOADED, TODOS_ERROR } from "@/components/Todos/store";

export const todosFetch = ({ commit }) => {
  commit(TODOS_LOADING, true)
  Api.get('todos')
    .json()
    .then(({ data }) => {
      commit(TODOS_GET, data)
      commit(TODOS_LOADED, true)
    })
    .catch(() => {
      commit(TODOS_ERROR, true)
    })
    .finally(() => {
      commit(TODOS_LOADING, false)
    })
}
