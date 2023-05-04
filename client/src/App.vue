<template>
  <div>
<!--    add the vue component to generate the page header-->
    <page-header></page-header>

<!--    add the vue router component that holds the state list-->
    <router-view></router-view>

<!--    add the vue component to generate the page footer-->
    <page-footer></page-footer>
  </div>
</template>


<script>

import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import StateList from "@/components/StateList.vue";

export default {
  name: 'App',
  components: {
    StateList,
    PageFooter,
    PageHeader
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
