jQuery(document).ready(function($) {
  $('.login-form-wrap .input-group input').focus(function() {
    $('.login-form-wrap .input-group').removeClass('focused');
    $(this).parent('.input-group').addClass('focused');
  });
});
