<template>
  <title>Users</title>
  <nuxt-link to='/'>Home</nuxt-link>
  <h2>Users page</h2>
  <div class="users">
    <User v-for="user in users" :key="user.id" :picture="user.picture" :firstName="user.firstName" :lastName="user.lastName" :id="user.id" />
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      users: []
    }
  },
  async created() {
    const config = {
      headers: {
        'app-id': '63824d91028e17b12c41e23f'
      }
    }
    try {
      const res = await axios.get('https://dummyapi.io/data/v1/user?limit=30', config);
      
      this.users = res.data.data;
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
.users {
  display: flex;
  flex-wrap: wrap;
}
</style>