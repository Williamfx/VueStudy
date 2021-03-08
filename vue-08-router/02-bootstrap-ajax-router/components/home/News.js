;(function () {
    const template = `
    <!--右边主页面区域-->
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		  <div class="header clearfix">
			<nav>
			  <ul class="nav nav-pills">
				<li class="active">
					<router-link to="/news/sport" tag="li">
					<a href="#">体育</a>
					</router-link>
				</li>
				<li >
					<router-link to="/news/tech" tag="li">
					<a href="#">科技</a>
					</router-link>
				</li>
			  </ul>
			</nav>
			<hr>
		  </div>
		  <!-- 定义路由出口 -->
		  <router-view></router-view>
	</div>
    `

    window.News = {
        template
    }
})()