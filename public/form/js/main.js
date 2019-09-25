$('.js_popup_register').on('click', function (e) {
    e.stopPropagation();
    const target = $(this).attr('target');
    if ($('#' + target).length === 0) {
        // gui yeu cau len server de lay form ve
        $.get("/" + target, function (data) {
            $("body").append(data);
        });
    } else {
        $('#' + target + ' .popup_register').addClass('active show')
    }
});

