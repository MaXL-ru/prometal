/**
 * 19.09.2016
 * File: prometal
 * Encoding: UTF-8
 * Author: MaXL
 * */

$(function () {
  var findFancyboxOverlay = function () {
    return $("body *:not(.fancybox-overlay, .fancybox-overlay *)");
  };
  
  $('.fancybox').fancybox(
    {
      beforeShow: function () {
        findFancyboxOverlay().addClass("blur");
      },
      afterClose: function () {
        findFancyboxOverlay().removeClass("blur");
      }
    }
  );
});
