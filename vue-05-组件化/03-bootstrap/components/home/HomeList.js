(function () {
    const template = `<div class="table-responsive">
                        <table class="table table-striped">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Header</th>
                            <th>Header</th>
                            <th>Header</th>
                            <th>Header</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1,001</td>
                            <td>{{name}}</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>sit</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>`
    window.HomeList = {
        template,
        data() {
            return {
                name:'梦学谷'
            }
        }
    }
})()