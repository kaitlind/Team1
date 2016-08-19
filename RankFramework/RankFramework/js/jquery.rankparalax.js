(function($) {
    $.fn.rankParalax = function() {
         
    // storing target element from html
        var mytarget = $(this);
        
    // storing arguments coming from the html function in an Array
        var element=[];
        for (var i= 0; i < arguments.length; i++){ 
            element[i] = arguments[i];
        };
        
    //Looking to see how many childrens does the container have
    var numOfElements = mytarget.children().length;
        console.log("Elements:" + numOfElements);
        
    //Adding needed css to each elemenet of the container
        var initialPos=[];
    mytarget.children().each(function(key, value ){                        
        $(this).css('z-index', key);
        // storing initial position of the lemenet in an array
        initialPos[key] = $(this).position().top;
        console.log(initialPos[key]);
    });    
        
        
         
    // On window scroll call paralax function     
    $(window).scroll(function(e){ parallax(); });   
        
      // Paralax function        
    function parallax(){  
    
        // The scrolled position of the window element plus 200 px offset.
            var scrolled = element[0] + $(window).scrollTop();
        
         // The container position.  
            var containerPosition = mytarget.offset().top;
      
                // If the container's position is at the top start the animation (is visible on the page).
                if ( (containerPosition) < scrolled ) {
                    console.log("container riched the top of the page");
                   
                              mytarget.children().each(function(key, value ){
                                  
                                $(this).css('top',+((scrolled - containerPosition) * element[key +1]) +'px');
                                  
                              });
                                       
                    }
                // if not stop animation
                else{
                        
                        console.log("container is not at the top");
                    }  
        
        
    }; //End function paralax
        
               
        
    };

})(jQuery);
