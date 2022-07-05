

const btnFetch = document.querySelector('#btnfetch'); 

btnFetch.addEventListener('click', function () {
    fetchProductList();
});
    



$(document).ready(function () {

    $('#btnprodlist').click(function () {

        let qs = $('#inpprodlist').val();

        if (qs === null || qs === undefined) { alert('Input is null'); }

        $.ajax({
            type: 'GET',
            url: '/Products/FindByOptionAjax',
            data: { findOption: qs },
            contentType: "text",
            dataType: "json",
            success: function (result) {
                //return result;
                //$('#prodlistresult').empty();
                $('#prodlistresult').html(result);
                console.log(result);
            }
        });
    });
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


