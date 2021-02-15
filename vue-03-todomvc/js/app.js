(function (Vue) {
	//初始化任务
	const items = [
		{
			id: 1,
			content: 'vue.js',
			completed:true //是否完成
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

	Vue.directive('app-focus', {
		inserted(el, binding) {
			el.focus()
		}
	})

	var app = new Vue({
		el: '#todoapp',
		data: {
			items,
			currentItem: null,
			filterStatus:'all'
		},
		directives: {
			//定义时不要在前面加v-,引用指令时要加上v-
			'todo-focus': {
				update(el, binding) {//每当指令的值更新hou，会调用此函数
					if (binding.value) {
						el.focus()
					}
				}
			}
		},
		computed: {
			filterItems() {
				switch (this.filterStatus) {
					case "active"://过滤出未完成的数据
						return this.items.filter(item => !item.completed)
						break
					case "completed"://过滤出已完成的数据
						return this.items.filter(item => item.completed)
						break
					default://其他，返回所有数据
						return this.items
				}
			},
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
			//编辑完成
			finishEdit(item, index, event) {
				const content = event.target.value.trim();
				//1.如果为空，则进行删除任务项
				if (!event.target.value.trim()) {
					this.removeItem(index)
					return
				}
				//2.添加数据到任务项中
				item.content = content
				this.currentItem = null
			},
			// 进入编辑状态,当前点击的任务项item赋值currentItem，用于页面判断显示 .editing
			toEdit(item) {
				this.currentItem = item
			},
			cancelEdit() {
				this.currentItem = null
			},
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

	//当路由 hash 值改变后会自动调用此函数
	window.onhashchange = function () {
		console.log('hash改变了', window.location.hash)
		//1.获取点击的路由 hash , 当截取的 hash 不为空返回截取的，为空时返回 'all'
		const hash = window.location.hash.substr(2) || 'all'
		console.log('hash',hash)
		//2.状态一旦改变，将hash赋值给filterStatus
		//  当计算属性filterItems感知到filterStatus变化后，就会重新过滤
		//  当filterItems重新过滤出目标数据后，则自动同步更新到视图中
		app.filterStatus = hash
	}
	//第一次访问页面时，调用一次让状态生效
	window.onhashchange()


})(Vue);

