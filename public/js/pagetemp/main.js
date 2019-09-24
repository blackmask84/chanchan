
$.fn.isInHalfViewport = function () {
  var elementTop = $(this).offset().top;
  const elHeight = $(this).height();

  const windowHeight = $(window).height();
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  const elHeightTop = windowHeight - (viewportBottom - elementBottom);
  const elHeightBottom = viewportBottom - elementTop;

  return elHeightBottom >= elHeight / 2 && elHeightTop >= elHeight / 2;
};

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

(function (win, $) {
  'use strict';

  var showVolumeIcon = function(wrapper) {
    const video = wrapper.find('video');
    wrapper.find('#play').hide();
    if (video.get(0).muted) {
      video.prop('muted', false)
      wrapper.find('#on').show();
      wrapper.find('#off').hide();
    } else {
      video.prop('muted', true)
      wrapper.find('#on').hide();
      wrapper.find('#off').show();
    }
  }

  var changeVolumeSingleVideo = function() {
    const wrapper = $('.video-wrap');
    wrapper.on('click', function(e) {
      e.stopPropagation()
      showVolumeIcon($(this));
    })
  }

  changeVolumeSingleVideo();

  $('.slidetemp .swiper-slide').on('click', function (e) {
    e.stopPropagation();
    showVolumeIcon($(this));
  });

  $(window).on('beforeunload', function(){
    var page_y = document.getElementsByTagName("body")[0].scrollTop;  
    window.location.href = window.location.href.split('?')[0] + '?page_y=' + page_y;
  });

  // $('.animation').each(function() {
  //   const currentEl = $(this);
  //   if (currentEl.isInViewport()) {
  //     currentEl.css('opacity', 1)
  //   }
  //   $(window).scroll(function() {
  //     if (currentEl.isInViewport()) {
  //       currentEl.css('opacity', 1)
  //     }
  //   })
  // });

})(window, window.jQuery);