export default{
  template: `
	<div>
		<h2 class="title">{{message}}</h2>
		<button @click="btnClick">按钮</button>
		<h1>{{name}}</h1>
	</div>
	`,
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