import Vue from 'vue'
import Vuex from 'vuex'

import * as FormStore from '@/components/Form/store'
import * as TodosStore from '@/components/Todos/store'
import { todoCreate } from '@/components/Form/actions/todo-create'
import { todosFetch } from '@/components/Todos/actions/todos-fetch'
import { todoDelete } from '@/components/Todos/actions/todo-delete'
import { todoUpdate } from '@/components/Todos/actions/todo-update'
import { todoToggle } from './components/Todos/actions/todo-toggle'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...TodosStore.initialState,
    ...FormStore.initialState
  },
  mutations: {
    ...TodosStore.mutations,
    ...FormStore.mutations
  },
  actions: {
    todosFetch,
    todoCreate,
    todoDelete,
    todoUpdate,
    todoToggle,
  }
})
