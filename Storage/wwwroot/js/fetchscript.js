
// Script handles fetch and construction of items for updating DOM. 


const items = document.querySelector('#proditembody');

const btnfetch = document.querySelector('#btnfetch');
btnfetch.addEventListener('click', function () {
    fetchData();
})

const getOptions = {
    'method': 'GET',
    'Content-type': 'application/json'
};


const fetchData = function () {

    let element = document.querySelector('#prodlist');

    let url = 'StudentA/FetchData?fetchInp=' + element.value;

    try {
        const response = fetch(url, getOptions)
            .then(res => {
                if (!res.ok) {
                    console.log('Not sucessful');
                } else {
                    console.log('SUCCESS');
                    return res.json();

                }
            })
            .then((data) => {
                console.log('data ' + data);

                items.innerHTML = ""; 

                data.forEach(i => addItemToDom(i));


            })

            .catch((error) => {
                console.log(error);
            });

        console.log('response ' + response);
        return response;

    } catch (e) {
        console.error('Exception is thrown ' + e.message);
    }

}

const addItemToDom = function (_item) {

    items.insertAdjacentHTML('beforeend', `<tr>
            <th>${_item.name}</th>
            <th>${_item.age}</th>
            <th>${_item.studProgram}</th>
        </tr>`);
}

class Item {
    constructor(name, age, studProgram) {
        this.name = name;
        this.age = age;
        this.studProgram = studProgram;
    }
}