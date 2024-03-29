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

    let tableHead = createHead(config); // we create innerHTML code of table head

    let usersId = Object.keys(newData.data);    // create id array for use in a map

    //create empty user to add
    let userDefault = {};
    config.columns.map(value => {
        if (value.value !== `delete`) {
            userDefault[`${value.value}`] = ``;
        }
    })


    //create array of all current users keys
    let usersKeys = Object.keys(newData.data);
    //console.log(usersKeys);


    createBody();    //we create innerHTML code of table body

    const ourConfigDiv = document.querySelector(`${config.parent}`);
    ourConfigDiv.innerHTML = ``;
    let table = document.createElement(`table`);
    table.id = `tableId`;

    //create button add row
    let singlton = 0;
    let buttonAddEmptyRow = document.createElement(`button`);
    buttonAddEmptyRow.addEventListener(`click`, () => {
        if (singlton === 0) {
            putRow();
            singlton++;
        }
    });
    buttonAddEmptyRow.innerHTML = `Додати`;
    buttonAddEmptyRow.className = `buttonAddEmptyRow`;
    ourConfigDiv.appendChild(buttonAddEmptyRow);

    addOnClick(table);
    ourConfigDiv.appendChild(table);
    table.className = `table`; //add style to table
    table.innerHTML = tableHead + tableBody;

    function createHead() {
        config.columns.map(value => {
            rowTh = rowTh + `<th ${thStyle}>${value.title}</th>`;
        });
        let tableHead = `<thead ${thStyle}>${rowTh}</thead>`;
        return tableHead;
    }

    function createBody() {
        Object.entries(newData.data).map(([userId, user]) => {
            let row = `<tr >`;
            Object
                .entries(user)
                .map(item => {
                    row = row + `<td class="cell" ${tableStyle}>${item[1]}</td>`;
                })
            row = row + `<td class="cell_delete" id=${userId} title="delete"
        style="width: 90px;"><button onclick="deleteUser('${userId}')">Видалити</button></td></tr>`;
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

            //to delete functionality console.log(cell.innerHTML, row.rowIndex, cell.cellIndex, `Title: ` + cell.title);
            if (cell.title === `delete`) {
                deleteRow(cell.id).then(reloadTable);
            }
        });

        function deleteRow(id) {
            return fetch(`${config.apiUrl}/${id}`, {
                method: "DELETE",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify()
            })
        }
    }


    function putRow() {
        let tableDiv = document.getElementById(`tableId`);
        const row = tableDiv.insertRow(1);
        config.columns.map((item, index) => {
            const newCell = row.insertCell(index);
            newCell.className = `cellAdd`;

            if (item.value === `delete`) {
                return
            }
            newCell.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {                                                   //input when click enter
                    userDefault[e.target.title] = e.target.value;

                    //if true row POST
                    let rowCorrect = Object.values(userDefault).every(value => value !== ``)
                    if (rowCorrect) {
                        postUser().then(() => DataTable(config));
                    } else {
                        Object.keys(userDefault).map(item => {
                            let emptyInput = document.querySelector(`[title="${item}"]`);
                            if (userDefault[item] === ``) {
                                emptyInput.classList.add(`input_cell_empty`);
                                emptyInput.placeholder =`Input Data!`;
                            } else {
                                emptyInput.classList.remove('input_cell_empty') ;
                            }
                        })
                    }
                }
            });
            newCell.addEventListener(`input`, function (e) {
                userDefault[e.target.title] = e.target.value;
            })
            const newInput = document.createElement(`input`);
            newInput.type = `text`;
            newInput.className = `inputCell`;
            newInput.placeholder = `${item.title}`;
            newInput.title = item.value;
            newCell.appendChild(newInput);
        })
    }

    async function postUser() {
        const rawResponse = await fetch(config.apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDefault)
        });
        const content = await rawResponse.json();
        console.log(content);
    }

}


/*TASK DATA*/

const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Ім’я', value: 'name'},
        {title: 'Прізвище', value: 'surname'},
        {title: 'Фотографія', value: 'avatar'},
        {title: 'Дата народження', value: 'birthday'},
        {title: 'Дії', value: 'delete'}
    ],
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


DataTable(config1)

function reloadTable() {
    DataTable(config1);
}