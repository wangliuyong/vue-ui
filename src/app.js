import Vue from 'vue';
import Button from './component/button.vue';
import ButtonGroup from './component/button-group.vue';

// 引入断言库chai
import chai  from 'chai';

import spies from 'chai-spies';

chai.use(spies);


//注册全局的组件
Vue.component('g-button', Button);
Vue.component('g-button-group', ButtonGroup);

const App = new Vue({
  el: "#app",
  data:{
    loading: false
  },
  methods:{
    clickButton(){

      console.log(2222)
      this.loading = !this.loading;
    }
  }
});

const Constructor=Vue.extend(Button);
let button = new Constructor({
  propsData:{
    icon: 'setting',
    loading: true
  }
});

const spy = chai.spy(() => {});

let div = document.createElement(div);

document.body.appendChild(div);

button.$mount(div);

button.$on('click', spy)

let useElement = button.$el.querySelector('use');

let expect = chai.expect;

let href = useElement.getAttribute('xlink:href');

expect(href).to.eq('#i-setting')
button.click();

expect(spy).to.have.called();