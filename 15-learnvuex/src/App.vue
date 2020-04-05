<template>
  <div id="app">
    <h2>-----info对象的内容是否响应-----</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>


    <h2>-----------App相关内容----------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtration">-</button>
    <button @click="additionCount(5)">+5</button>
    <button @click="addStudent">添加学生</button>

    <h2>------------App内容：getters相关信息-------</h2>
    <h2>{{$store.state.counter * $store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <!-- <h1>{{more19stu}}</h1> -->
    <h1>{{$store.getters.more19stu}}</h1>
    <h1>{{$store.getters.more19stu.length}}</h1>
    <h1>{{$store.getters.more19stuL}}</h1>
    <h1>{{$store.getters.more19stuLength}}</h1>
    <h3>{{$store.getters.moreAgestu(8)}}</h3>

    <h2>------------hellovuex内容--------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

export default {
 name:'App',
 components:{
   HelloVuex
 },
 data(){
   return{
     message:"我是App组件",
   }
 },
 computed: {
   /* more19stu(){
     return this.$store.state.students.filter(s=>{
       return s.age>=19
     })
   } */
 },
 methods: {
   addition(){
     this.$store.commit('increment')
   },
   subtration(){
    this.$store.commit('decrement')
   },
   additionCount(count){
    //  this.$store.commit('incrementCount',count)

     this.$store.commit({
       type:'incrementCount',
       count
     })
   },
   addStudent(){
     const stu={id:114,name:'haha',age:22}
     this.$store.commit('addStudent',stu)
   },
   updateInfo(){
     this.$store.dispatch('aupdateInfo')
   }
 }
}
</script>

<style>

</style>
