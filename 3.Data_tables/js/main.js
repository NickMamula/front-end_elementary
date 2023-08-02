/*TABLE TASK*/
function DataTable(config, data) {
    let tableStyle = `style="border:1px solid green"`;
    let thStyle = `style="border:1px solid green;background-color: rgb(4, 170, 109);"`;
    let rowTh=``;
    let tbody = `<tbody>`;

    // we create innerHTML code of table head
    config.columns.map(value => {
        rowTh = rowTh + `<th ${thStyle}>${value.title}</th>`;
    });
    let tableData = `<thead ${thStyle}>${rowTh}</thead>`;

    //we create innerHTML code of table body
    data.map((value, index) => {
        let row =`<tr>`;
        delete value.id;
        Object
            .entries(value)
            .map(item => {
                row = row + `<td ${tableStyle}>${item[1]}</td>`;
                console.log(item[1]);
            })
        row = row + `</tr>`;
        tbody = tbody + row;
    })
    tbody=tbody+`</tbody>`;
    console.log(tbody);

    //finish HTML code
    tableData= tableData + tbody;

    //create table and append to div
    const ourConfigDiv = document.querySelector(`${config.parent}`);
    const table = document.createElement("table");

    //set innerHTML to table
    ourConfigDiv.appendChild(table);

    //add style to table
    table.innerHTML = tableData;
    table.style.width = '800px';
    table.style.height = '200px';
    table.style.border = '1px solid black';
    table.style.margin = `33px`;
}

/*TASK DATA*/

const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Ім’я', value: 'name'},
        {title: 'Прізвище', value: 'surname'},
        {title: 'Вік', value: 'age'},
    ]
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
];

DataTable(config1, users);