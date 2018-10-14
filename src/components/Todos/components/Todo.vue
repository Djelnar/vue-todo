<template>
  <div :class="$style.wrapper">
    <input
      type="text"
      :class="$style.title"
      v-model="mutableTitle"
      @blur="update(mutableTitle)"
    />
    <input
      type="checkbox"
      @change="todoToggle({ id: $props.id })"
      :class="$style.checkbox"
      :checked="completed"
    />
    <div :class="$style.close" @click="todoDelete({ id: $props.id })" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Todo",
  props: {
    title: String,
    completed: Boolean,
    id: Number
  },
  data() {
    return {
      mutableTitle: "",
      update(title) {
        const { id } = this.$props;

        if (title !== this.$props.title) {
          if (title.length < 5) {
            this.mutableTitle = this.$props.title;
          } else {
            this.todoUpdate({ id, title });
          }
        }
      }
    };
  },
  beforeMount() {
    this.mutableTitle = this.$props.title;
  },
  methods: {
    ...mapActions(["todoDelete", "todoUpdate", "todoToggle"])
  }
};
</script>

<style module>
.wrapper {
  display: flex;
  width: 300px;
  align-items: center;
  padding: 12px;
  background-color: #fff;
  margin-bottom: 12px;
}
.title {
  margin-right: auto;
  font-family: inherit;
  border: 1px solid transparent;
  outline: none;
}
.title:focus {
  border-color: blue;
}
.checkbox {
  margin-right: 16px;
}

.close {
  width: 11px;
  height: 11px;
  background-image: url(./cross.svg);
  cursor: pointer;
  transition: transform 100ms ease;
}
.close:hover {
  transform: scale(1.05);
}
</style>
