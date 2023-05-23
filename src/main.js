import { createApp } from 'vue'
import App from './App.vue'
import Main from './components/MainSection.vue'


const app = createApp(App);
app.component('main-section', Main);
app.mount('#app')
