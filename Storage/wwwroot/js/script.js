

const btnFetch = document.querySelector('#btnfetch'); 

btnFetch.addEventListener('click', function () {
    fetchProductList();
});
    

const fetchProductList = function () {

    let request = document.querySelector('#prodlist');

    fetch('Products/FindByOptionAjax?findoption=' + request.value , {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },

    }).then(res => {
        return JSON.stringify(res.json);
    }).catch(_err => console.log(_err));
};


