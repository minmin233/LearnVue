<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h1>{{$store.getters.more19stu}}</h1>
  </div>
</template>

<script>
export default {
  name:'HelloVuex'
}
</script>

<style>

</style>
