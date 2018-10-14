<template>
  <form :class="$style.wrapper" @submit.prevent="todoCreate">
    <input
      :value="newTodoText"
      @input="handleChange"
      placeholder="Todo text"
      :disabled="newTodoLoading"
      minlength="5"
      required
      :class="$style.input"
      type="text"
    />
    <p v-if="newTodoError" :class="$style.error">Error, pls try agen</p>
    <button :class="$style.button">Create</button>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { NEW_TODO_CHANGE } from "./store";

export default {
  name: "Form",
  methods: {
    ...mapActions(["todoCreate"]),
    handleChange(e) {
      this.$store.commit(NEW_TODO_CHANGE, e.target.value);
    }
  },
  computed: {
    ...mapState({
      newTodoText: state => state.newTodoText,
      newTodoLoading: state => state.newTodoLoading,
      newTodoError: state => state.newTodoError
    })
  }
};
</script>

<style module>
.wrapper {
  width: 300px;
}
.input {
  background-color: #fff;
  width: 100%;
  display: block;
  font-family: inherit;
  margin-bottom: 4px;
}
.input:disabled {
  cursor: wait;
  opacity: 0.5;
}
.button {
  width: 100%;
  background-color: pink;
  text-align: center;
  padding: 6px 0;
  transition: opacity 200ms ease;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  outline: none;
}
.button:hover {
  opacity: 0.9;
}
.button:disabled {
  background-color: papayawhip;
  cursor: wait;
}
.error {
  font-size: 14px;
  padding: 8px;
  color: red;
}
</style>
