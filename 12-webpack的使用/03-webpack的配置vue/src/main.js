const {add,mul} = require('./js/mathUtils.js')
console.log(add(2,3))
console.log(mul(2,3))

import { name,age } from "./js/info";
console.log(name)
console.log(age)

require('./css/normal.css')

require('./css/special.less')

document.writeln('<div>hahaha</div>')

import Vue from 'vue'
// import App from './vue/app'
import App from "./vue/App.vue";
new Vue({
	el: "#app",
	template:'<App></App>',
	components:{
		App
	}
});
