<template>
  <div class="wrapper">
    <div class="left">
      <div class="extraLeft">
        <h1>{{ $t('techPersonelHeading') }}</h1>
        <ul>
          <li>{{ $t('techPersonelLine1') }}</li>
          <li>{{ $t('techPersonelLine2') }}</li>
          <li>{{ $t('techPersonelLine3') }}</li>
          <li>{{ $t('techPersonelLine4') }}</li>
        </ul>
        <a href="https://vedras.hr/download/Vedras_dezinfekcija_UVD_Robotima.pdf">
        <button>
          {{ $t('techPersonelSubmit') }}
        </button>
        </a>
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
  display: inline-block;
  animation: 600ms ease-out 1 slideInFromBottom;
}
.left {
  width: 50%;
  float: left;
  min-height: 464px;
  -webkit-box-shadow: 0 0 20px lightgrey;
        box-shadow: 0 0 20px lightgrey;
  display: flex;
  align-items: center;
  transition: all 500ms ease-out;
}
.right {
  width: 50%;
  float: right;
  min-height: 464px;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url("../assets/91448396_10158792383403455_4586978351473754112_n-1(1).jpg");
}
.extraLeft {
  padding: 80px;
  color: #5C5C5C;
}
@media (max-width: 786px) {
  .wrapper {
    flex-direction: column;
  }
  .left {
    width: 100%;
  }
  .right {
    width: 100%;
    height: auto;
  }
}
ul {
  padding-left: 20px;
}
h1 {
  color: #5C5C5C;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 2.5rem;
}
button {
  margin-top: 50px;
  background-color: #027FC1;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 1px solid #027FC1;
}
button:hover {
  background-color: white;
  color: #027FC1;
  border: 1px solid #027FC1;
  transition-duration: 0.2s;
}
a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}
</style>