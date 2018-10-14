<template>
  <div id="app">
    <Todos />
    <Form />
  </div>
</template>

<script>
import Todos from "@/components/Todos";
import Form from "@/components/Form";

export default {
  components: {
    Todos,
    Form
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  font-size: 100%;
}
body {
  min-height: 100vh;
  font-family: Montserrat, sans-serif;
  box-sizing: border-box;
  background-color: #eeeeee;
}
#app {
  padding: 12px;
}
</style>
