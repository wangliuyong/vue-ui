import Vue from 'vue'

import Button from './button.vue'

Vue.component('g-button',Button)   //注册全局的组件

const App = new Vue({
    el:"#app"
})