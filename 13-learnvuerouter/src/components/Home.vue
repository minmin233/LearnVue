<template>
  <div>
    <h2>我是home</h2>
    <p>我是主页的内容</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Home',
  /* created() {
    document.title='首页'
  }, */
}
</script>

<style>

</style>
