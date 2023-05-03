<template>

<!--  Create the div that holds the header-->
  <div id="block-header">
    <h1 id="title">Have you visited every state?</h1>
  </div>

</template>

<script>
export default {
  name: "PageHeader",
}
</script>

<!--Set a style to import the background image-->
<style scoped>

#block-header {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  border-radius: .3rem;
  background-color: brown;
  background-image: url("~@/assets/map_header.jpeg");
  background-position: 70px;
  background-size: cover;
}

#title {
  padding: 5px;
  font-weight: 500;
  color: ghostwhite;
  background-color: #005900;
  display: table;
  margin: auto;
}


</style>