import Vue from 'vue'

import Button from './button.vue'

import ButtonGroup from './button-group.vue'


//注册全局的组件
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)

const App = new Vue({
    el: "#app",
})
