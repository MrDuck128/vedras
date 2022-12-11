<template>
  <nuxt-link class="text" :to="'user/' + id">
    <div class="user">
      <img :src="`${picture}`">
      <br>
      {{ firstName }} {{ lastName }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['picture', 'firstName', 'lastName', 'id']
}
</script>

<style scoped>
.user {
  width: 150px;
  height: 200px;
  padding: 1rem;
  border: 1px grey;
  margin: 20px;
  background-color: lightgrey;
  border-radius: 20px;
}
img {
  width: 150px;
}
.text {
  text-decoration: none;
  text-align: center;
}
</style>