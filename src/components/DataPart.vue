<template>
  <div class="data-container">
    <h2>FAQ</h2>
    <ul class="data-list">
      <data-item
        class="data-item"
        v-for="item in newFaq"
        :item="item"
        :key="item.id"
        :faq="newFaq"
        @toggleOpen="toggleOpen"
      ></data-item>
    </ul>
  </div>
</template>

<script>
import DataItem from "./DataItem.vue";
export default {
  components: { DataItem },
  inject: ["faq"],
  data() {
    return {
      newFaq: this.faq,
    };
  },
  methods: {
    toggleOpen(id) {
      this.newFaq = this.faq.map((f) => {
        if (f.id === id) {
          f.Show = !f.Show;
        } else {
          f.Show = false;
        }
        return f;
      });
    //   console.log(this.newFaq);
    },
  },
};
</script>

<style scoped>
.data-item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.data-container {
  /* background: green; */
  height: 100%;
  padding: 3rem 1rem;
}
h2 {
  font-size: 2rem;
  color: rgb(46, 46, 46);
  margin-bottom: 2rem;
}
ul {
  list-style: none;
  margin-right: 6rem;
}
@media (max-width: 750px){
  .data-container{
    padding: 0;
    margin-top: 15vh;
  }
  ul{
    margin: 0 1rem;
  }
  h2{
    text-align: center;
  }
   
}

</style>
