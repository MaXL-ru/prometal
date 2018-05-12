'use strict';

(function ($) {
  $('.open-youtube-video').click(
    function () {
      var $el = $(this);
      
      $el.closest('div').html(
        '<iframe width="100%" height="' + $el.find('img').height() +
          '" frameborder="0" src="https://www.youtube.com/embed/' +
          $el.data('youtube-id') + '?autoplay=1&controls=0&showinfo=0"></iframe>'
      );
      return false;
    }
  );
})($);
