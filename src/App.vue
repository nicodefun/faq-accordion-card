<template>
  <main-section></main-section>
  <img class="img-box" src="./images/illustration-box-desktop.svg" alt="" />
  <footer-section></footer-section>
</template>

<script>
import FooterSection from "./components/FooterSection.vue";
export default {
  components: {
    FooterSection,
  },
  data() {
    return {
      faq: [
        {
          id: 1,
          Question: "How many team members can I invite?",
          Answer:
            "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. ",
          Show: false,
        },
        {
          id: 2,
          Question: "What is the maximum file upload size?",
          Answer:
            "No more than 2GB. All files in your account must fit your allotted storage space. ",
          Show: false,
        },
        {
          id: 3,
          Question: "How do I reset my password?",
          Answer:
            "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. ",
          Show: false,
        },
        {
          id: 4,
          Question: "Can I cancel my subscription?",
          Answer:
            "Yes! Send us a message and we’ll process your request no questions asked. Do you provide additional support? Chat and email support is available 24/7. Phone lines are open during normal business hours. ",
          Show: false,
        },
      ],
    };
  },
  provide() {
    return {
      faq: this.faq,
    };
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: "Kumbh Sans", sans-serif;
}
body {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-repeat: no-repeat;
  background: rgb(106, 99, 232);
  background: linear-gradient(
    0deg,
    rgba(106, 99, 232, 1) 0%,
    rgba(163, 103, 233, 1) 100%
  );
}
img.img-box {
  position: absolute;
  left: 5rem;
}
@media (max-width: 750px){
  img.img-box{
    display: none;
  }
  body{
    background-clip: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    
  }
   
}
</style>
