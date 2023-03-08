import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library,dom } from '@fortawesome/fontawesome-svg-core'
import "bootstrap/dist/css/bootstrap.css"
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far)
dom.watch();



const vue= createApp(App)

vue.use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
import "bootstrap/dist/js/bootstrap.js";
