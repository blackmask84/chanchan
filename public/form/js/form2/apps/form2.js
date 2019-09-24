$(document).ready(function () {

    $('.form-desktop').each(function () {
        const formId = '#' + $(this).prop('id') + ' ';
        const formDesktop = $(this);

        $(formId + '.popup .btn_close,' + formId + '.popup_info .info_done .btn_done').on('click', function (e) {
            e.stopPropagation();
            $(formId + '.popup.show').removeClass('show');
        });

        // Open Info popup
        $(formId + '.js_popup_info').on('click', function () {
            if ($(this).hasClass('btn_info1')) {
                $(formId + '#choose_type').text('Cần tư vấn');
            }
            if ($(this).hasClass('btn_info2')) {
                $(formId + '#choose_type').text('Đăng kí ngay');
            }
            $(formId).find('.show').removeClass('show');
            $('body').addClass('overflow_hidden');
            $(formId + '.popup.popup_info').addClass('show');
        });

        $(formId + '.popup_info .info_more .btn_back').on('click', function () {
            $(formId + '.popup_info .info_more,' + formId + ' .popup_info .svg_info_more').css('display', 'none');
            $(formId + '.popup_info .info_basic,' + formId + ' .popup_info .svg_info_basic').css('display', 'block');
            $(formId + ".popup_info .info_deco .bike").animate({
                bottom: "26.5%",
                left: "17.9%"
            });
        });



        $(formId + '.popup_register .ct .btn_info1').hover(
            function () {
                $(formId + '.popup_register .svg_hover_register1').css('display', 'block');
            },
            function () {
                $(formId + '.popup_register .svg_hover_register1').css('display', 'none');
            }
        );
        $(formId + '.popup_register .ct .btn_info2').hover(
            function () {
                $(formId + '.popup_register .svg_hover_register2').css('display', 'block');
            },
            function () {
                $(formId + '.popup_register .svg_hover_register2').css('display', 'none');
            }
        );


        $(formId + '.info_basic form').submit(function (e) {
            e.preventDefault();
            const form = $(this);

            let isFilled = true;
            const requiredList = ['info_name', 'info_phone'];
            requiredList.forEach(function (value, index) {
                if ($(formId + '#' + value).val() === '' || !$(formId + '#' + value).val()) {
                    isFilled = false;
                }
            })

            if (!isFilled) {
                form.find('.popup_notifi').css('visibility', 'visible');
                setTimeout(function () {
                    form.find('.popup_notifi').css('visibility', 'hidden');
                }, 3000);
            } else {
                form.find('.popup_notifi').css('visibility', 'hidden');
                $(formId + '.popup_info .info_basic,' + formId + ' .popup_info .svg_info_basic').css('display', 'none');
                $(formId + '.popup_info .info_more,' + formId + ' .popup_info .svg_info_more').css('display', 'block');
                $(formId + ".popup_info .info_deco .bike").animate({
                    bottom: "19.5%",
                    left: "21.9%"
                });
            }
        });

        $(formId + '.info_more form').submit(function (e) {
            e.preventDefault();
            const form = $(this);
            const allInput = form.find('input');
            const allTextArea = form.find('textarea');

            let isFilled = true;
            allInput.each(function (e) {
                if ($(this).val() === '' || !$(this).val()) {
                    isFilled = false;
                }
            });

            allTextArea.each(function (e) {
                if ($(this).val() === '' || !$(this).val()) {
                    isFilled = false;
                }
            });

            if (!isFilled) {
                form.find('.popup_notifi').css('visibility', 'visible');
                setTimeout(function () {
                    form.find('.popup_notifi').css('visibility', 'hidden');
                }, 3000)
            } else {
                form.find('.popup_notifi').css('visibility', 'hidden');
                $(formId + '.popup_info .info_more,' + formId + ' .popup_info .svg_info_more').css('display', 'none');
                $(formId + '.popup_info .info_done,' + formId + ' .popup_info .svg_info_done').css('display', 'block');
                $(formId + ".popup_info .info_deco .bike").animate({
                    bottom: "3.5%",
                    left: "30.9%"
                });

                function getFormattedDate(today) {
                    var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
                    var day = week[today.getDay()];
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; //January is 0!
                    var yyyy = today.getFullYear();
                    var hour = today.getHours();
                    var minu = today.getMinutes();

                    if (dd < 10) { dd = '0' + dd }
                    if (mm < 10) { mm = '0' + mm }
                    if (minu < 10) { minu = '0' + minu }

                    return day + ' - ' + dd + '/' + mm + '/' + yyyy + ' ' + hour + ':' + minu;
                }

                const name = $(formId + '#info_name').val();
                const phone = $(formId + '#info_phone').val();
                const codeGift = $(formId + '#info_codegift').val();
                const province = $(formId + '#info_province').val();
                const district = $(formId + '#info_district').val();
                const village = $(formId + '#info_village').val();
                const numHouse = $(formId + '#info_numhouse').val();
                const url = getCookie('referalLink');
                const option = $(formId + ".register_label").text();
                const requi = $(formId + '#choose_type').text();
                const data = {
                    name,
                    phone,
                    codeGift,
                    province,
                    district,
                    village,
                    numHouse,
                    url,
                    option,
                    requi,
                    submitTime: getFormattedDate(new Date())
                };

                axios.post('/register', data)
                    .then(function (response) {
                        const facebookRoute = formDesktop.attr('facebook');
                        $.get("/" + facebookRoute, function(data){
                            $("body").append(data);
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        });
    })
})