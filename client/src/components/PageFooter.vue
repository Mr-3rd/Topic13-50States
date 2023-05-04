<template>
  <div class="footer">

    <div class="m-2">
      <span class="p-3">
<!--        create the router links to make the footer navigational-->
        <router-link v-bind:to="{ name: 'StateList' }">Home</router-link>
      </span>

      <span class="p-3">
        <router-link v-bind:to="{ name: 'AboutSite' }">About this site</router-link>
      </span>
    </div>



    <p class="text-right p-2" id="attribution">
      Map image by <a href="https://unsplash.com/@nicosmit99?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nico Smit</a> on <a href="https://unsplash.com/photos/Q1tAFjL34C4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "PageFooter"
}
</script>

<style scoped>

#attribution {
  font-size: xx-small;
  text-align: center;
}

span {
  margin-left: 1rem;
}

</style>