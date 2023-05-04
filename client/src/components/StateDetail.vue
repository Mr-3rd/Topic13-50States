<template>
<!--  create the state divider-->
  <div class="state-info">
    <span class="state-name">{{ state.name }}</span>
    <div>
<!--      create the visited checkbox-->
      <input class="visit-state" type="checkbox">
    </div>
  </div>
</template>

<script>
export default {
  name: "StateDetail",
  // Set the props that fill the variables in the template
  props: {
    state: Object
  }
}

</script>

<style scoped>

.state-info {
  padding: 1rem;
  height: 8rem;
  width: 10rem;
  border: 1px darkolivegreen solid;
  border-radius: .3rem;
  background-color: lightsteelblue;
}

.visit-state {
  margin: 1rem;
}

</style>