/*HTTP*/
async function fetchUsers(apiUrl) {
    const response = await fetch(apiUrl);
    // waits until the request completes...
    //console.log(JSON.stringify(data, undefined, 4));
    return await response.json();
}


/*TABLE TASK*/
async function DataTable(config) {
    //console.log(newData["data"]);
    //console.log(Object.keys(newData));
    let newData = await fetchUsers(config.apiUrl);
    const x = Object.values(newData.data).map((value) => { return value; });
    console.log(x.length);
    let tableStyle = `style="border:1px solid;"`;
    let thStyle = `style="border:2px solid;background-color: rgb(4, 170, 109);"`;
    let rowTh = ``;
    let tbody = `<tbody>`;

    // we create innerHTML code of table head
    config.columns.map(value => {
        rowTh = rowTh + `<th ${thStyle}>${value.title}</th>`;
    });
    let tableData = `<thead ${thStyle}>${rowTh}</thead>`;
    for (let i = 0; i < newData.length; i++) {
        console.log(newData["data"][3]);
    }
    //we create innerHTML code of table body
    Object.values(newData.data).map((value) => {
        let row = `<tr>`;
        delete value.id;
        Object
            .entries(value)
            .map(item => {
                row = row + `<td ${tableStyle}>${item[1]}</td>`;
                //  console.log(item[1]);
            })
        row = row + `<td style="width: 90px;background-color: rgba(235,1,9,0.78);border: 2px solid;"></td></tr>`;     //here end of each row
        tbody = tbody + row;
    })
    tbody = tbody + `</tbody>`;
    // console.log(tbody);

    //finish HTML code
    tableData = tableData + tbody;

    //create table and append to div
    const ourConfigDiv = document.querySelector(`${config.parent}`);
    const table = document.createElement("table");

    //set innerHTML to table
    ourConfigDiv.appendChild(table);

    //add style to table
    table.innerHTML = tableData;
    table.style.width = '1000px';
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
        {title: 'Дата народження', value: 'age'},
        {title: 'Дії', value: 'delete'},
    ],
    apiUrl: "https://mock-api.shpp.me/mmykola/users"
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
];

(async function () {
    await DataTable(config1);
})();