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
  });
}(jQuery));
