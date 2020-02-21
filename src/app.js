import Vue from 'vue';
import Button from './component/button.vue';
import ButtonGroup from './component/button-group.vue';


//注册全局的组件
Vue.component('g-button', Button);
Vue.component('g-button-group', ButtonGroup);

const App = new Vue({
  el: "#app",
});

const Constructor=Vue.extend(Button);

console.log(Constructor);