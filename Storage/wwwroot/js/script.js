$(document).ready(function () {

    $('#inpbtn').click(function () {

        let qs = $('#mkinp').val();

        if (qs === null || qs === undefined) { alert('Input is null'); }

        $.ajax({
            type: 'GET',
            url: '/Products/AjaxTest',
            data: { inpArg: qs },
            contentType: "text",
            dataType: "json",
            success: function (result) {
                console.log(result);
            }
        });
    });
});
