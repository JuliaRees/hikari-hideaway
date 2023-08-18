$(document).ready(function() {
  $('.hamburger-button').click(function() {
      $('.mobile-menu').slideToggle(300);
      $(this).toggleClass('active');
  });
});