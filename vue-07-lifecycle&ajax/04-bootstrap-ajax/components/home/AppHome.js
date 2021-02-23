(function () {
    const template = `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <!--右边上半区域-->
                            <h1 class="page-header">Dashboard</h1>
                            <!-- 定义插槽 -->
                            <slot name="dashboard"></slot>
                            <!-- 通过自定义时间实现删除功能：
                                @自定义事件名=时间监听函数
                                在子组件dashboard中触发delete_hobby事件来调用deleteHobby函数
                            -->
                            <dashboard :hobbies="hobbies" @delete_hobby="deleteHobby"></dashboard>
                            <!--右边下半区域-->
                            <h2 class="sub-header">员工管理</h2>
                            <home-list :emp-list="empList" :deleteEmp="deleteEmp"></home-list>
                        </div>`
    window.AppHome = {
        template,
        data() {
            return {
                hobbies: ['看书', '台球', '睡觉', '撸代码'],
                empList: [
                {id:1,name:'小梦1',salary:80001},
                {id:2,name:'小梦2',salary:80002},
                {id:3,name:'小梦3',salary:80003},
                {id:4,name:'小梦4',salary:80004},
                ]
            }
        },

        //生命周期钩子
        created() {
            axios.get('http://127.0.0.5500/vue-07-lifecycle&ajax/04-bootstrap-ajax/emp.json').then(response => {
                console.log(response.data)
                this.empList = response.data
            }).catch(error => {
                console.log(error.message)
            })
        },
        
        methods: {
            //删除指定下标的数据
            //因为删除emp会对empList做更新操作，
            //而empList是初始化在当前这个数组里，所以删除的函数要定义在这个组件中
            deleteEmp(index) {
                this.empList.splice(index,1)
            },
            //删除爱好
            deleteHobby(index) {
                this.hobbies.splice(index,1)
            }
        },
        components: {
            Dashboard,
            HomeList
        },
    }
    
})()