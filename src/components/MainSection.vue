<template>
  <section class="main-section">
    <img-part ></img-part>
    <data-part ></data-part>
  </section>
</template>

<script>
import ImgPart from './ImgPart.vue';
import DataPart from './DataPart.vue';
export default {
  components:{
    ImgPart,
    DataPart
  }
};
</script>


<style scoped>
.main-section{
  width: 70vw;
  min-height: 70vh;
  background-color: white;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 750px){
    .main-section{
     display: flex;
     flex-direction: column;
     margin-top: 20vh;
     box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
}

  


</style>