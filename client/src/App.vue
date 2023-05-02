<template>
  <div>
    <page-header></page-header>
    <p>
      todo-Content
    </p>
    <page-footer></page-footer>
  </div>
</template>


<script>

import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: 'App',
  components: {
    PageFooter,
    PageHeader

  },
  mounted() {
    // Use a lifecycle hook to make a request
    this.$stateService.getAllStates().then(states => console.log(states))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
