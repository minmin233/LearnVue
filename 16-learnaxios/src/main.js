import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// const obj={
//   name:'minmin',
//   age:18
// }
// const {name,age}=obj;

// const names=['haha','heihei','hehe'];
// const [name1,name2,name3]=names;

// 1.axios基本使用
/* axios({
  url:'http://123.207.32.32:8000/api/h8/home/multidata',
  method:'get'
}).then(res=>{
  console.log(res);
}) */

/* axios({
  // url: "http://123.207.32.32:8000/api/h8/home/data?type=sell&page=3",
  url: "http://123.207.32.32:8000/api/h8/home/data",
  params:{
    type:'pop',
    page:1
  }
}).then((res) => {
  console.log(res);
}) */


// 使用全局的配置和对应的网络请求
/* axios.defaults.baseURL = "http://123.207.32.32:8000/api/h8";
axios.defaults.timeout=5000

axios.all([axios({
    url: "home/multidata",
  }),axios({
    url: "home/data",
    params: {
      type: "pop",
      page: 1,
    }
  })]).then(axios.spread((res1,res2)=>{
  console.log(res1);
  console.log(res2);
}))

axios({
  url:'/category'
})
 */

/* const instance1 = axios.create({
  baseURL:"http://123.207.32.32:8000/api/h8",
  timeout:5000
})
instance1({
  url: "home/multidata"
}).then(res=>{
  console.log(res);
}) */

import {request} from './network/request'
request({
  url: "home/multidata",
}).then(res=>{
  //console.log(res);
}).catch(err=>{
  //console.log(err);
})

/* request({
  baseConfig: {},
  success: function (res) {},
  failure: function (err) {},
}); */

/* request({
  url: "home/multidata",
},res=>{
  console.log(res);
},err=>{
  console.log(err);
}) */


