

const btnFetch = document.querySelector('#btnfetch');

btnFetch.addEventListener('click', function () {
    fetchProductList();
});


const fetchProductList = function () {

    let request = document.querySelector('#prodlist');

    let options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };


    fetch('Products/FindByOptionJsFetch?findoption=' + request.value, options).then(res => {
        console.log('res ' + res.json);
        return JSON.stringify(res.json);
    }).then(data => {
        console.log('data ' + data);
    })
        .catch(_err => console.log(_err));
};


