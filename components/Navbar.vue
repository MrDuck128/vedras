<template>
  <div class="navbar">
      <ul>
        <li class="bold">{{ $t('contact') }}</li>
        <li><a href="mailto:info@vedras.hr">info@vedras.hr</a></li>
        <li><a href="tel:385989606920">+385 98 9606 920</a></li>
      </ul>
      <div v-if="$i18n.locale==='hr'">
        <nuxt-link :to="switchLocalePath('en')" class="lang">EN</nuxt-link>
      </div>
      <div v-else>
        <nuxt-link :to="switchLocalePath('hr')" class="lang">HR</nuxt-link>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
  width: 90%;
  margin: auto;
  padding: 34px 0 15px 0;
  display: flex;
  justify-content: flex-end;
}
.navbar ul li {
  list-style: none;
  display: inline-block;
  margin: 0 20px;
}
.navbar ul li {
  list-style: none;
  display: inline-block;
  margin: 0 7px;
  color: white;
}
.navbar ul li a {
  text-decoration: none;
  color: white;
  font-size: 16px;
}
.bold {
  font-weight: bold;
  font-size: 15px;
}
.lang {
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin-right: 10%;
  margin-left: 30px;
}
</style>