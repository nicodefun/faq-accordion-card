<template>
  <li :id="id" @click="getIndex">
    <div class="question">
      <p class='question-p' :class="this.item.Show ? 'open' : ''">{{ question }}</p>
      <span class="aarow-container"
        ><img
          class="aarow"
          :class="this.item.Show ? 'active' : ''"
          src="../images/icon-arrow-down.svg"
          alt="aarow"
      /></span>
    </div>

    <p class="answer" :class="this.item.Show ? 'open' : ''">
      {{ answer }}
    </p>
    <hr />
  </li>
</template>
<script>
export default {
  props: ["item", "faq", "toggleOpen"],
  emits: ["toggleOpen"],
  data() {
    return {
      question: this.item.Question,
      answer: this.item.Answer,
      id: this.item.id,
    };
  },
  methods: {
    getIndex() {
      this.$emit("toggleOpen", this.id);
    },
  },
};
</script>

<style scoped>
.question {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.question-p{
  color: grey;
  font-weight: bold;
}
.question-p.open{
    color: rgb(75, 75, 75);

}
.question-p:hover{
    color: orange;
} 

hr {
  margin: 1rem 0;
  border-top: 1px solid rgb(212, 212, 212);
}
.aarow-container {
  display: inline-block;
  min-width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.8rem;
  pointer-events: none;
}
.aarow-container img {
  width: 100%;
  display: inline-block;
}
.aarow{
  transform: translateY(50%) rotate(0deg);
  transition: all 0.2s ease-in-out;
}

.aarow.active {
  transform: translateY(-50%) rotate(180deg);
  transition: all 0.2s ease-in-out;
}
.answer {
  margin-top: 1rem;
  color: rgb(177, 177, 177);
  font-weight: 600;
  font-size: 0.9rem;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.2s ease-in-out ;
}
.answer.open {
  opacity: 1;
  max-height: 1000px;
  transition: all 0.2s ease-in-out ;
}

</style>
