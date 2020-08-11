<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{ this.$store.state.num }}</p>
    <p>{{ this.$store.getters.getNum }}</p>
    <button @click="add">+</button>
    <button @click="addOne">+++</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      num: 0
    };
  },
  mounted() {},
  methods: {
    add() {
      // this.$store.state.num++;
      this.$store.commit("addNum", 1);
    },
    addOne() {
      this.$store.dispatch("asyncAddNum", 2);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
