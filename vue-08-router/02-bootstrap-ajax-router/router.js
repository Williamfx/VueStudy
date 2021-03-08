// const { default: VueRouter } = require("vue-router")

;(function () {
    window.router = new VueRouter({
        //全局配置router-link标签生成的css类名
        linkActiveClass:'active',
        routes: [
              {path:'/',component:AppHome},
            {
                path: '/news',
                component: News,
                children: [
                    //当匹配到/news/sport请求时，
                    //组件Sport会被渲染在News组件中的<router-view>中
                    {
                        path: '/news/sport',
                        component:Sport
                    },
                    {
                        path: 'tech',
                        component: Tech
                    },
                    //点击新闻管理默认选中新闻，
                    //就是/news后面没有子路径时，redirect重定向到体育
                    {
                        path: '',
                        redirect:'/news/sport'
                    }
                ]
            },
              {path:'/about',component:About},
        ]
    })
})()