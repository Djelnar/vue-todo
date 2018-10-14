<template>
  <div>
    <Todo
      v-bind:key="todo.id"
      v-for="todo in todos"
      :title="todo.title"
      :completed="todo.completed"
      :id="todo.id"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Todo from "./components/Todo";

export default {
  name: "Todos",
  components: {
    Todo
  },
  mounted() {
    this.todosFetch();
  },
  methods: {
    ...mapActions(["todosFetch"])
  },
  computed: mapState(["todos"])
};
</script>

<style>
</style>
