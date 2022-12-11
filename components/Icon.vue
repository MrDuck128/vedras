<template>
  <a class="test" href="{{ href }}">
    <!-- <img class="icon" :src="images[dynamic_image_name]" alt="Discover Nuxt 3" /> -->
    <div v-if="instagram">
      <img class="icon" src="../assets/icons/instagram.png" alt="instagram">
    </div>
    <div v-if="facebook">
      <img class="icon" src="../assets/icons/facebook.png" alt="facebook">
    </div>
    <div v-if="linkedin">
      <img class="icon" src="../assets/icons/linkedin.png" alt="linkedin">
    </div>
  </a>
</template>

<script>
export default {
  props: {
    instagram: Boolean,
    facebook: Boolean,
    linkedin: Boolean
  }
  // props: ['picture'],
  // computed: {
  //   pictureUrl() {
  //     if (this.picture !== '') {
  //       console.log(this.picture)
  //       return `${this.picture}`
  //     }
  //   }
  // }
}


// script setup lang='ts'>
// import { filename } from 'pathe/utils';

// module.exports = {
//   props: {
//     icon: String
//   },
//   created: function() {
//     console.log(this.icon);
//   },
//   data: function() {
//     return {
//       dynamic_image_name: this.icon
//     }
//   }
// }

// // const dynamic_image_name = 'instagram';

// const glob = import.meta.glob('~/assets/icons/*.png', { eager: true });
// const images = Object.fromEntries(
//   Object.entries(glob).map(([key, value]) => [filename(key), value.default])
// );
</script>

<style scoped>
.test {
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
}
.icon {
  width: 15px;
  height: 15px;
  margin-top: 30px;
}
</style>