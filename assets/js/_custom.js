(function( $ ) { "use strict";
  $(window).on('load', function () {
    $('.login-form-wrap .input-group input').focus(function() {
      $('.login-form-wrap .input-group').removeClass('focused');
      $(this).parent('.input-group').addClass('focused');
    });
    $('.input-daterange').datepicker({
      todayHighlight: true
    });
    $('.id-num').click(function(e) {
      e.preventDefault();
    });
    $('.id-num').popover({
      'html'    : true,
      'trigger' : 'hover'
    });
    $('.table-sortable').tablesorter();
    $('.toggle-nav').click(function(e){
      e.preventDefault();
      $('.side-nav').slideToggle();
    });
    $('input, textarea').placeholder();
  });
  $('body') .css({'min-height': (($(window).height()))+'px'});
    $(window).resize(function(){
        $('body') .css({'min-height': (($(window).height()))+'px'});
    });
}(jQuery));
