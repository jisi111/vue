// Vue 组件化创建公共标签
Vue.component('list',{
	template: 
	'<div id="com">'+
		'<p @click.prevent="a()" v-text="preventIndex"></p>'+
	'</div>',
	props: ['preventIndex'],
	methods: {
		a: function(){
			this.$emit('a');
		}
	}
});
