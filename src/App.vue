<template>
  <div id="app">
    <Navbar />
    <Dashboard />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Dashboard from './views/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Dashboard,
  },
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
