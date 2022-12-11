<template>
  <div class="wrapper" data-aos="fade-up" data-aos-delay="300">
    <div class="left">
      <div class="dodatni">
        <h1>{{ $t('newHeadline') }}</h1>
        <p>
          {{ $t('newListHeadline') }}
          <ul>
            <li>{{ $t('newLine1') }}</li>
            <li>{{ $t('newLine2') }}</li>
            <li>{{ $t('newLine3') }}</li>
          </ul>
          <br>
          {{ $t('newP') }} <br><br>
          <a href="http://www.uvd-robots.com/">{{ $t('newMore') }}</a>
        </p>
      </div>
    </div>
    <div class="right">
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
  padding: 70px 10%;
  background-color: #027FC1;
  display: flex;
  align-items: center;
}
.left {
  width: 50%;
  float: left;
}
.dodatni {
  padding: 50px 120px 50px 0;
}
.right {
  width: 50%;
  float: right;
  min-height: 574px;
  background-position: center;
  background-size: cover;
  background-image: url("../assets/offer.png");
  transition: all 500ms ease-out;
}
@media (max-width: 786px) {
  .wrapper {
    flex-direction: column;
  }
  .left {
    width: 100%;
    min-height: 0;
  }
  .right {
    width: 100%;
    min-height: 300px;
  }
}
p {
  color: white;
  font-size: 16px;
  line-height: 35px;
}
ul {
  padding-left: 20px;
  font-weight: bold;
}
h1 {
  color: white;
  margin-bottom: 30px;
}
a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  color: lightgrey;
  transition: color 150ms ease-in;
}
</style>