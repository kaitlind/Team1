// APP: totop.js
// Authors: RANK framework Team
// Description:  

(function($) {
    $.fn.toTop = function(color) {
        if(color == undefined){color = "grey"};
        $("body").append("<div id='to-top'></div>");
        
        var btt = $('#to-top'); 
        btt.css({
                "bottom":"20px",
                "display":"none",
                "position":"fixed",
                "right":"20px",
                "cursor":"pointer",
        });
         
        btt.html("<img src='img/top-"+ color +".png'  alt='Back to top'>");  

            btt.on('click', function(e){
                        $('html, body').animate({ scrollTop:0 }, 500);
                        e.preventDefault();
            });

            $(window).on('scroll', function() 
                    {
                        var self = $(this),
                            height = self.height(),
                            top = self.scrollTop();
                        if(top > 200) {
                            if(!btt.is(':visible')){
                                btt.fadeIn();
                            }
                        }else {
                            btt.fadeOut();
                        }

                    });
                   
    };

})(jQuery);
