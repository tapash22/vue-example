import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Scrollspy from 'vue2-scrollspy';

// import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './style.css';

Vue.config.productionTip = false;


// this.labelsObject = [... new Set(res.data.map(data => data.albumId))];
//         const obj = {};
//         this.labelsObject.forEach((arrVal) => {
//           obj[arrVal] = res.data.filter(data => data.albumId == arrVal).length;

//         });
//         this.chartData.labels = this.labelsObject;
//         this.chartData.datasets[0].data = Object.values(obj);

//         console.log(obj);
new Vue({
  router,
  store,
  Scrollspy,
  render: h => h(App)
}).$mount('#app')
