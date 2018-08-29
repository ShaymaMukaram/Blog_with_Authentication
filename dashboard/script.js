(function () {
    const url = 'https://jsonplaceholder.typicode.com/posts';

   

    axios.get(url, {})
        .then(res => {
            const tbody = $('table tbody');
            res.data.forEach((el, i) => {
                const tr = $('<tr>')
                    .html(`<td>${el.id}</td>
                    <td>${el.title}</td>
                    <td>${el.body}</td>
                    `);

                tbody.append(tr);
            })
        })


    $('#createBtn').on('click', () => {
       

        axios.post(url, {
         
            title: $('#title').val(),
            body: $('#body').val()
        }).then(res => {
            console.log(res.data)

            return axios.get(url, {})
        }).then(res => console.log(res.data))
    });

    
}())