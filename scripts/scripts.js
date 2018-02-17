$(document).ready(function() {
  $('#link1').click(function() {
    console.log('clicked');
    $path = $('#home').offset().top;
    $('body').animate({ scrollTop: $path }, 1000);
  });
  $('#link2').click(function() {
    $path = $('#about').offset().top;
    $('body').animate({ scrollTop: $path }, 1000);
  });
  $('#link3').click(function() {
    $path = $('#contact').offset().top;
    $('body').animate({ scrollTop: $path }, 1000);
  });
  $('#link4').click(function() {
    $path = $('#box4').offset().top;
    $('body').animate({ scrollTop: $path }, 1000);
  });
  $('#link5').click(function() {
    $path = $('#box5').offset().top;
    $('body').animate({ scrollTop: $path }, 1000);
  });
});
