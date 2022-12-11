<template>
  <title>Vedras</title>
  <nuxt-link to='/user'>User</nuxt-link>
  <div class="content">
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
  </div>
</template>

<script>

</script>

<style>
.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
@keyframes slideInFromBottom {
  0% {
    transform: translateY(10%);
    opacity: 0.5;
  }
}
@keyframes appear {
  100% {
    opacity: 1;
  }
}
</style>