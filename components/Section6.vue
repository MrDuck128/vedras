<template>
  <div class="wrapper">
    <div class="main">
      <p>
        {{ $t('more1') }} <br>
        <a href="mailto:info@vedras.hr">info@vedras.hr</a>
        {{ $t('more2') }}
        <a href="tel:385989608920">+385 98 9608 920</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  width: 100%;
}
.main {
  min-height: 336px;
  background-color: #027FC1;
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  padding: 100px;
  color: white;
  font-size: 36px;
  text-align: center;
  animation: slideInFromBottom 600ms ease-out 1;
}
a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
</style>