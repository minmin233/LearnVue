<template>
  <div>
    <h2>我是用户界面</h2>
    <h2>{{userId}}</h2>
    <h1>{{$route.params.id}}</h1>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name:'User',
  computed: {
    userId(){
      return this.$route.params.id
    }
  },
  methods: {
    btnClick(){
      console.log(this.$router);

    }
  },
}
</script>

<style>

</style>
