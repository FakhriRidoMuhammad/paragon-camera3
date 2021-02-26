import Vue from 'vue'
import App from './App.vue'
// import WebCam from '../node_modules/vue-web-cam'
//import WebCam from "../../src";

Vue.config.productionTip = false
    // Vue.use(WebCam);


new Vue({
    render: h => h(App),
}).$mount('#app')