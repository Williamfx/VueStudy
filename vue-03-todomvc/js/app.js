(function (Vue) {
	//初始化任务
	const items = [
		{
			id: 1,
			content: 'vue.js',
			completed:false //是否完成
		},
		{
			id: 2,
			content: 'java',
			completed:true
		},
		{
			id: 3,
			content: 'pyhton',
			completed:false
		}
	]

	var app = new Vue({
		el: '#todoapp',
		data: {
			items
		},
		computed: {
			//复选框计算属性（双向绑定）
			toggleAll:{
				get(){
					// console.log(this.remaining)
					return this.remaining === 0;
				},
				set(newStatus){
					this.items.forEach((item)=>{
						item.completed = newStatus
					})
				}
			},
			remaining() {
				return this.items.filter(item => !item.completed).length
			}
		},
		methods: {
			//移除所有未完成项
			removeCompleted() {
				//过滤出所有未完成的任务，重新赋值数组即可
				this.items = this.items.filter(item => !item.completed)
			},
			//移除任务项
			removeItem(index){
				//移除索引为index的一条记录
				if (confirm("确定要删除该项吗")==true){
					this.items.splice(index,1);
				}
			},

			//增加任务项
			addItem(event) {
				// console.log('addItem', event.target.value)
				//1.获取文本框输入的数据
				const content = event.target.value.trim();
				//2.判断数据如果为空，则什么都不做
				if (!content.length) {
					return
				}
				//3.如果不为空，则添加到数组中
				//生成id值
				const id = this.items.length + 1
				this.items.push({
					id,
					content,
					completed:false
				})
				//4.清空文本框内容
				event.target.value = ""
			}
		}
	})

})(Vue);
