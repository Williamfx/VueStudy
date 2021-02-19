(function () {
    const template = `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <!--右边上半区域-->
                            <h1 class="page-header">Dashboard</h1>
                            <dashboard></dashboard>
                            <!--右边下半区域-->
                            <h2 class="sub-header">Section title</h2>
                            <home-list></home-list>
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
        methods: {
            //删除指定下标的数据
            //因为删除emp会对empList做更新操作，
            //而empList是初始化在当前这个数组里，所以删除的函数要定义在这个组件中
            deleteEmp(index) {
                this.empList.splice(index,1)
            }
        },
        components: {
            Dashboard,
            HomeList
        }
    }
    
})()