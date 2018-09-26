<template>
  <div id="app">
    <v-head />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/Head.vue";

export default {
  name: "App",
  components: {
    "v-head": Head
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
