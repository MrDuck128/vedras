<template>
  <div class="wrapper">
    <div class="left">
      <p>
        {{ $t('p1') }}
      </p>
      <img class="pImg1" src="../assets/UVD-Robots-logo-tagline-black-website.png">
      <img class="pImg2" src="../assets/boston-medical-logo-color-jpg.png">
      <p class="smallText">
        {{ $t('p2') }}
      </p>
    </div>
    <div class="right">
      <div class="block">
        <img class="over" src="../assets/kill-stroj.png">
        <div class="text">
          {{ $t('kills1') }}
          <br>
          {{ $t('kills2') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  padding: 90px 10%;
  margin-left: auto;
  margin-right: auto;
  color: #5C5C5C;
  justify-content: space-between;
  
}
.left {
  float: left;
  width: 50%;
  height: auto;
  animation: slideInFromBottom 600ms ease-out 1;
  transition: all 500ms ease-out;
}
.right {
  float: right;
  width: 50%;
  height: 100%;
}
p {
  margin-bottom: 2rem;
}
.smallText {
  max-width: 350px;
}
.pImg1 {
  display: flex;
  width: 303px;
}
.pImg2 {
  width: 366px;
}
.block {
  width: 336px;
  height: 176px;
  background-color: #027FC1;
  color: white;
  display: flex;
  align-content: center;
  align-items: center;
  margin-top: 23rem;
  margin-left: 7%;
  animation: appear 1s 600ms ease-out 1 forwards;
  opacity: 0;
}
.text {
  padding-left: 30px;
  font-size: 1.5rem;
  font-weight: bold;
}
.over {
  position: absolute;
  width: 50%;
  max-width: 530px;
  display: block;
  margin-top: -28rem;
  margin-left: -1%;
}
@media (max-width: 786px) {
  .left {
    width: 100%;
  }
  .right {
    width: 100%;
    max-height: 600px;
  }
  .over {
    width: 60%;
    margin-top: -55%;
    margin-left: 1%;
  }
}
</style>