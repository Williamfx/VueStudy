(function () {
    const template = `
    <tr>
        <td>{{emp.id}}</td>
        <td>{{emp.name}}</td>
        <td>{{emp.salary}}</td>
    </tr>
    `

    window.Item = {
        props: {
            emp: {
                type: Object,
                required:true
            }
        },
        template
    }
})()