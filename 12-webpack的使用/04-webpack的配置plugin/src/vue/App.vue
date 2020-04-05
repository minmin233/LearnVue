<template>
	<div>
		<h2 class="title">{{message}}</h2>
		<button @click="btnClick">按钮</button>
		<h1>{{name}}</h1>
		<Cpn></Cpn>
	</div>
</template>

<script>
import Cpn from './Cpn'

export default {
	name:'App',
	components:{Cpn},
	data(){
		return {
      message: "hello webpack",
      name: "minmin"
    };
	},
 methods: {
    btnClick(){
		}
	}
}
</script>

<style scoped>
.title{
	color:green;
}
</style>