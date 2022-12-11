<template>
  <div class="wrapper">
    <div class="right">
      <div class="extraRight">
        <h1>#covidfree</h1>
        <p>
          {{ $t('covid1') }}
          <br><br>
          {{ $t('covid2') }}
        </p>
      </div>
    </div>
    <div class="left">
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
  animation: 600ms ease-out 1 slideInFromBottom;
  transition: all .5s
}
.left {
  width: 50%;
  float: left;
  min-height: 464px;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url("../assets/1_9JdjVS0SJanGma8Nt63dGw(1).jpg");
}
.right {
  width: 50%;
  float: right;
  min-height: 464px;
  -webkit-box-shadow: 0 0 20px lightgrey;
        box-shadow: 0 0 20px lightgrey;
  display: flex;
  align-items: center;
  transition: all 500ms ease-out;
}
.extraRight {
  padding: 80px;
}
@media (max-width: 786px) {
  .wrapper {
    flex-direction: column;
  }
  .left {
    width: 100%;
    min-height: 300px;
    height: auto;
  }
  .right {
    width: 100%;
  }
}
p {
  color: #5C5C5C;
  font-size: 16px;
}
h1 {
  color: #5C5C5C;
  margin-bottom: 30px;
  font-weight: 900;
  font-size: 2.5rem;
}
a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}
</style>