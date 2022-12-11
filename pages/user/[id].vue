<template>
  <div>
    <title>User - {{ this.user.id }}</title>
    <nuxt-link to='/user'>Back to users</nuxt-link>
    <br>
    <div v-if="this.user.location !== undefined">
      <img :src="`${this.user.picture}`">
      <br>
      Name: {{ this.user.firstName }} <br>
      Surname: {{ this.user.lastName }} <br>
      Gender: {{ this.user.gender }} <br>
      Date of Birth: {{ this.user.dateOfBirth }} <br>
      E-mail: {{ this.user.email }} <br>
      Phone: {{ this.user.phone }} <br>
      Location: <br>
        &emsp; Street: {{ this.user.location.street }} <br>
        &emsp; City: {{ this.user.location.city }} <br>
        &emsp; State: {{ this.user.location.state }} <br>
        &emsp; Country: {{ this.user.location.country }} <br>
        &emsp; Timezone: {{ this.user.location.timezone }}
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {}
    }
  },
  async created() {
    const config = {
      headers: {
        'app-id': '63824d91028e17b12c41e23f'
      }
    }
    try {
      const res = await axios.get(`https://dummyapi.io/data/v1/user/${this.$route.params.id}`, config);
      
      this.user = res.data;
      console.table(this.user)
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>

</style>