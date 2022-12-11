<template>
  <section class="background">
    <Navbar />
    <div class="hero">
      <img src="../assets/Group4.svg">
      <hr>
      <div class="hold">
        ON HOLD
      </div>
      <div class="icons">
        <Icon instagram :href="'https://www.instagram.com/vedrasgroup/?hl=en'" />
        <Icon facebook :href="'https://www.facebook.com/vedrasevents/'" />
        <Icon linkedin :href="'https://www.linkedin.com/company/42940956/'" />
        <!-- Assets with dynamic names are not resolved - feature not yet implemented -->
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style>
.background {
  width: 100%;
  min-width: auto;
  min-height: 347px;
  background-position: center;
  background-size: cover;
  background-image: url("../assets/Group6.jpg");
}
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  padding: 0 0 25px 0;
}
hr {
  width: 450px;
  height: 1px;
  background: white;
}
.hold {
  font-size: 35px;
  padding-top: 40px;
  color: white;
  font-weight: bold;
  animation: slideInFromBottom 600ms ease-out 1;
}
.icons {
 width: 400px;
 display: flex;
 justify-content: center;
 margin: 0 20px;
}
</style>