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
