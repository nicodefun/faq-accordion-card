<template>
    <div class="img-container">
      <img class="bg-pattern" src="../images/bg-pattern-desktop.svg" alt="" />
      <img
        class="img-woman"
        src="../images/illustration-woman-online-desktop.svg"
        alt=""
      />
    </div>
    <div class="img-mobile-container">
      <img class="bg-pattern-moibile" src="../images/bg-pattern-mobile.svg" alt="" />
      <img
        class="img-woman-mobile"
        src="../images/illustration-woman-online-mobile.svg"
        alt=""
      />
    </div>
   
</template>

<script>
export default {
};
</script>

<style scoped>
.img-container {
  /* background: yellow; */
  position: relative;
  overflow: hidden;
}
.img-mobile-container{
  display: none;
}
img.bg-pattern {
  position: absolute;
  left: -120%;
  top: -70%;
}
img.img-woman {
  position: absolute;
  height: 80%;
  left: -15%;
  top: 10%;
}

@media (max-width: 750px){
  .img-container{
    display: none;
  }
  .img-mobile-container{
    display: block;
    position: absolute;
    /* background-color: yellow; */
    min-height: 20vh;
    width: 70%;
  }
  .bg-pattern-moibile{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  img.img-woman-mobile{
    display: inline-block;
    /* background-color: red; */
    width: 80%;
    position: absolute;
    top: -80%;
    left: 50%;
    transform: translateX(-50%);
  }

}

 
</style>
