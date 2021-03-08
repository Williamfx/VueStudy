;(function () {
    window.AppLeaf = {
        template: `
        <div class="col-sm-3 col-md-2 sidebar">
            <ul class="nav nav-sidebar">
            <!--
                1.因为.active样式在生成在li标签上而不是a标签上，可以通过在router-link标签上使用tag属性，让他渲染为li标签
                2.可在每个router-link标签上使用active-class属性，制定渲染后标签上面的css类名，或者在VueRouter实例(router.js)中使用选项linkActiveClass全局配置生成的css类名
                3.通过上面，发现不管点击哪一个链接，/路由（首页）一直有高亮背景，因为/foo都会去模糊匹配/和/foo，所以/一直有高龄
                可在router-link标签上使用exact属性，使用开启精确匹配
            -->
                <li class="active">
                    <router-link to="/" tag="li" exact>首页</router-link>
                </li>
                <li>
                    <router-link to="/news" tag="li" exact>新闻管理</router-link>
                </li>
                <li>
                    <router-link to="/about" tag="li" exact>关于我们</router-link>
                </li>
            </ul>
        </div>
        `
    }
})()