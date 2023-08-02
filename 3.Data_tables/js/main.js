/*HTTP*/
async function fetchUsers(apiUrl) {
    const response = await fetch(apiUrl);
    // waits until the request completes...
    //console.log(JSON.stringify(data, undefined, 4));
    return await response.json();
}


/*TABLE TASK*/
async function DataTable(config) {
    let newData = await fetchUsers(config.apiUrl);
    let tableStyle = `style="border:1px solid;"`;
    let thStyle = `style="border:2px solid;background-color: rgb(4, 170, 109);"`;
    let rowTh = ``;
    let tableBody = `<tbody>`;

    let tableHead = createHead(); // we create innerHTML code of table head

    let usersId = Object.keys(newData.data);    // create id array for use in a map

    createBody();    //we create innerHTML code of table body

    //create table and append to div
    const ourConfigDiv = document.querySelector(`${config.parent}`);
    ourConfigDiv.innerHTML=``;
    let table = document.createElement("table");

    addOnClick(table);

    //set innerHTML to table
    ourConfigDiv.appendChild(table);

    //add style to table
    table.innerHTML = tableHead + tableBody;
    table.style.width = '1000px';
    table.style.height = '200px';
    table.style.border = '1px solid black';
    table.style.margin = `33px`;

    function createHead() {
        config.columns.map(value => {
            rowTh = rowTh + `<th ${thStyle}>${value.title}</th>`;
        });
        let tableHead = `<thead ${thStyle}>${rowTh}</thead>`;
        return tableHead;
    }

    function createBody() {
        Object.values(newData.data).map((value, index) => {
            let userId = usersId[index];
            let row = `<tr >`;
            Object
                .entries(value)
                .map(item => {
                    row = row + `<td ${tableStyle}>${item[1]}</td>`;
                    //  console.log(item[1]);
                })
            row = row + `<td id=${userId} title="delete"
        style="width: 90px;background-color: rgba(235,1,9,0.78);border: 2px solid;">User ${userId} delete</td></tr>`;
            tableBody = tableBody + row;
        })
        tableBody = tableBody + `</tbody>`;
    }


    function addOnClick(table) {
        table.addEventListener('click', function (e) {
            const cell = e.target.closest('td');
            if (!cell) {
                return;
            } // Quit, not clicked on a cell
            const row = cell.parentElement;

            //to delete functionality console.log(cell.innerHTML, row.rowIndex, cell.cellIndex, `Title: ` + cell.title);
            if (cell.title === `delete`) {
                deleteRow(cell.id);
                (async function () {
                    await DataTable(config1);
                })();
            }
        });
        
        function deleteRow(id) {
            fetch(`${config.apiUrl}/${id}`, {
                method: "DELETE",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify()
            })
        }
    }

    var css = 'table td:hover{ background-color: #00ff00 }';
    var style = document.createElement('style');
}


/*TASK DATA*/

const config1 = {
    parent: '#usersTable',
    columns: [{title: 'Ім’я', value: 'name'}, {title: 'Прізвище', value: 'surname'}, {
        title: 'Вік',
        value: 'age'
    }, {title: 'Дата народження', value: 'age'}, {title: 'Дії', value: 'delete'},],
    apiUrl: "https://mock-api.shpp.me/mmykola/users"
};

const users = [{id: 30050, name: 'Вася', surname: 'Петров', age: 12}, {
    id: 30051,
    name: 'Вася',
    surname: 'Васечкін',
    age: 15
}, {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15}, {
    id: 30051,
    name: 'Вася',
    surname: 'Васечкін',
    age: 15
}, {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},];

(async function () {
    await DataTable(config1);
})();