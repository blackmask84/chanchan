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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return undefined;
}

const url = $(location).attr('href');
const referalLink = getCookie('referalLink');

if (referalLink && referalLink.indexOf('/?') > -1) {
    if (url.indexOf('/?') > -1) {
        const id = url.split('/?')[1];
        const oldId = referalLink.split('/?')[1];
        if (id && id !== '' && id !== oldId) {
            setCookie('referalLink', url, 7);
        }
    }
} else {
    setCookie('referalLink', url, 7);
}
