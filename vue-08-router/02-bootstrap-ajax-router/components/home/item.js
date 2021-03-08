(function () {
    const template = `
    <tr>
        <td>{{emp.id}}</td>
        <td>{{emp.name}}</td>
        <td>{{emp.salary}}</td>
        <td>
            <a href="#" @click="deleteItem">删除</a>
        </td>
    </tr>
    `

    window.Item = {
        props: {
            emp: {
                type: Object,
                required:true
            },
            deleteEmp: Function,
            index:Number
        },
        methods: {
            //删除员工
            deleteItem() {
                if (window.confirm(`确定删除${this.emp.name}的记录吗？`)) {
                    //一出索引为index的一条记录，
                    //注意：不要少了this
                    this.deleteEmp(this.index)
                }
            }
        },
        template
    }
})()