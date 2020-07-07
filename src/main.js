import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdContent, MdTabs, MdList, MdIcon, MdDivider, MdAvatar, MdField, MdApp, MdEmptyState, MdProgress} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdList);
Vue.use(MdDivider);
Vue.use(MdIcon);
Vue.use(MdAvatar);
Vue.use(MdField);
Vue.use(MdApp);
Vue.use(MdEmptyState);
Vue.use(MdProgress);

new Vue({
  render: h => h(App),
}).$mount('#app')
