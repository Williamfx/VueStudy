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
			remaining() {
				return this.items.filter(item => !item.completed).length
			}
		},
		methods: {
			addItem(event) {
				console.log('addItem', event.target.value)
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
