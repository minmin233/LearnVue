<template>
  <div id="app">
    <h2>hahaha</h2>
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
<!--
    <router-link :to="/user/+userId" tag="button" replace
    active-class="active">用户</router-link> -->
    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- <router-link :to="{path:'/profile',query:{name:'minmin',age:18}}">档案</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
 -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>


    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'lisi',

    }
  },
  methods: {
    homeClick(){
      this.$router.push('/home')
      console.log('homeClick')
    },
    aboutClick(){
      this.$router.push('/about')
      console.log('aboutClick')
    },
    userClick(){
      this.$router.push('/user/' + this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'minmin',
          age:18
        }
      })
    }
  }
}
</script>

<style scope>
/* .router-link-active{
  color: red;
} */

/* .active{
  color: #f00;
} */
</style>
