(function($) {
$.fn.dropdownMobileMenu = function() {

 $('#hide').click(function(event) {
        $(this).toggleClass('desktopMenu');
        $('#mainMenu ul').toggleClass('desktopMenu');
 
        event.preventDefault();
    });
     return this;
 };
    }) (jQuery);