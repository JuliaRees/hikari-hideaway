// A $( document ).ready() block.
$( document ).ready(function() {
    
    $('.hamburger-button').click(function(){
        $('.mobile-menu').slideToggle(300);
        $(this).toggleClass('active');
    });
    
// Animate on Scroll - activate
    AOS.init({
        duration: 500
    });
    
    });