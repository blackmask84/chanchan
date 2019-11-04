$(window).on('load', function() {
    $('.form-mobile').each(function() {
        const formId = '#' + $(this).prop('id') + ' ';

        $(formId + '.js_register_slide').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerPadding: '0',
            autoplay: true,
            autoplaySpeed: 15000
        });
    });
})

$(document).ready(function() {
    $('.form-mobile').each(function() {
        const formId = '#' + $(this).prop('id') + ' ';
        const formMobile = $(this);

        // Close popup
        $(formId + '.link_close').on('click', function() {
            $(this).parents('.popup').removeClass('active show');
        });

        $(formId + '.js_close_popup').on('click', function() {
            $(formId + '.popup').removeClass('active show');
        });
        
        // Open Info popup
        $(formId + '.js_info_open').on('click', function() {
            if ($(this).hasClass('btn_register_more')) {
                $(formId + '#choose_type').text('Cần tư vấn');
            }
            if ($(this).hasClass('btn_register_now')) {
                $(formId + '#choose_type').text('Đăng kí ngay');
            }
            $(formId).find('.active').removeClass('active');
            $(formId + '.popup.popup_info').addClass('active');
        });

        $(formId + '.info_ct01 .btn_back').on('click', function() {
            $(formId + '.popup.popup_info').removeClass('active');
        });

        $(formId + '.js_btn_back').on('click', function(e) {
            $(formId + '.info_ct02,' + formId + '.info_svg02,' + formId + ' .info_bg02').hide();
            $(formId + '.info_ct01,' + formId + ' .info_svg01,' + formId + ' .info_bg01').show();
            $(formId + '.js_info_bike').animate({
                top: '25%',
                left: '13.6%'
            }, 300);
        });


        $(formId + '.info_ct01 form').submit(function(e) {
            e.preventDefault();
            const form = $(this);
            let isFilled = true;
            const requiredList = ['info_name', 'info_phone'];
            requiredList.forEach(function(value, index) {
                if ($(formId + '#' + value).val() === '' || !$(formId + '#' + value).val()) {
                    isFilled = false;
                }
            })

            if (!isFilled) {
                form.find('.popup_notifi').css('visibility', 'visible');
                setTimeout(function() {
                    form.find('.popup_notifi').css('visibility', 'hidden');
                }, 3000);
            } else {
                form.find('.popup_notifi').css('visibility', 'hidden');
                $(formId + '.info_ct01, ' + formId + ' .info_svg01, ' + formId + ' .info_bg01').hide();
                $(formId + '.info_ct02, ' + formId + ' .info_svg02, ' + formId + ' .info_bg02').show();
                $(formId + '.js_info_bike').animate({
                    top: '34.8%',
                    left: '18.3%'
                }, 300);
            }
        });

        $(formId + '.info_ct02 form').submit(function(e) {
            e.preventDefault();
            const form = $(this);
            const allInput = form.find('input');
            const allTextArea = form.find('textarea');

            let isFilled = true;
            allInput.each(function(e) {
                if($(this).val() === '' || !$(this).val()){
                    isFilled = false;
                }
            });

            allTextArea.each(function(e) {
                if($(this).val() === '' || !$(this).val()){
                    isFilled = false;
                }
            });

            if (!isFilled) {
                form.find('.popup_notifi').css('visibility', 'visible');
                setTimeout(function() {
                    form.find('.popup_notifi').css('visibility', 'hidden');
                }, 3000)
            } else {
                form.find('.popup_notifi').css('visibility', 'hidden');
                $(formId + '.info_ct02,' + formId + '.info_svg02,' + formId + '.info_bg02').hide();
                $(formId + '.info_ct03,' + formId + '.info_svg03').show();
                $(formId + '.js_info_bike').animate({
                    top: '53.7%',
                    left: '24.6%'
                }, 300);

                function getFormattedDate(today) {
                    var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
                    var day  = week[today.getDay()];
                    var dd   = today.getDate();
                    var mm   = today.getMonth()+1; //January is 0!
                    var yyyy = today.getFullYear();
                    var hour = today.getHours();
                    var minu = today.getMinutes();

                    if(dd<10)  { dd='0'+dd } 
                    if(mm<10)  { mm='0'+mm } 
                    if(minu<10){ minu='0'+minu } 

                    return day+' - '+dd+'/'+mm+'/'+yyyy+' '+hour+':'+minu;
                }

                const name = $(formId + '#info_name').val();
                const phone = $(formId + '#info_phone').val();
                const codeGift = $(formId + '#info_codegift').val();
                const province = $(formId + '#info_province').val();
                const district = $(formId + '#info_district').val();
                const village = $(formId + '#info_village').val();
                const numHouse = $(formId + '#info_numhouse').val();
                const url = getCookie('referalLink');
                const option = $(formId + "#register_choose_name").text();
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
                    const facebookRoute = formMobile.attr('facebook');
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
