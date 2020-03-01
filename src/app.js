import Vue from 'vue';
import Button from './component/button.vue';
import ButtonGroup from './component/button-group.vue';

// 引入断言库chai
import chai  from 'chai';


//注册全局的组件
Vue.component('g-button', Button);
Vue.component('g-button-group', ButtonGroup);

const App = new Vue({
  el: "#app",
});

const Constructor=Vue.extend(Button);
let button = new Constructor({
  propsData:{
    icon: 'setting'
  }
});

button.$mount('#test');

let useElement = button.$el.querySelector('use');

let expect = chai.expect;

let 

// console.log(useElement)

console.log(Constructor);