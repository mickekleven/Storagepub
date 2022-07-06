
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

    let url = 'Products/FindByOptionJsFetch?findOption=' + element.value;

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
            <th>${_item.price}</th>
            <th>${_item.count}</th>
            <th>${_item.inventoryValue}</th>
            <th>${_item.inventoryTotal}</th>
            <th>${_item.orderDate}</th>
            <th>${_item.category}</th>
            <th>${_item.shelf}</th>
            <th>${_item.vat}</th>
            <th>${_item.totalPrice}</th>
        </tr>`);
}

class Item {
    constructor(id, name, price, count, inventoryValue, inventoryTotal, orderDate, category, shelf, vat, totalPrice  ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
        this.inventoryValue = inventoryValue;
        this.inventoryTotal = inventoryTotal;
        this.orderDate = orderDate;
        this.category = category;
        this.shelf = shelf;
        this.vat = vat;
        this.totalPrice = totalPrice;
    }
}

