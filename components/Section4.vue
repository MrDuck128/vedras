<template>
  <div class="wrapper">
    <div class="right">
      <p>
        {{ $t('clients') }}
      </p>
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
}
.left {
  width: 50%;
  min-height: 631px;
  float: left;
  background-position: center;
  background-size: cover;
  background-image: url("../assets/Group7.jpg");
  transition: all 500ms ease-out;
}
.right {
  width: 50%;
  min-height: 631px;
  float: right;
  background-color: #027FC1;
  display: flex;
  align-items: center;
}
@media (max-width: 786px) {
  .left {
    width: 100%;
  }
  .right {
    width: 100%;
    min-height: 0;
  }
}
p {
  padding: 50px;
  color: white;
  font-size: 36px;
  font-weight: bold;
}
</style>