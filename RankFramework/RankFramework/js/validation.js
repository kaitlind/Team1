(function($) {
$.fn.validateSelection = function() {
    $("#myform").validate({
    rules:{
         options: {
              required: true
    }
    },
    messages:{
         options: {
              required: "Choose one of the options"
    }
    }
});
    return this;
 };


}) (jQuery);

// Validate Input
    
 (function($) {
$.fn.validateInput = function() {
    $("#myform").validate(
      {
        rules: 
        {
          inputOne: 
          {
            required: true
          },
          inputTwo: 
          {
            required: true
           
          }
        },
        messages: 
        {
          inputOne: 
          {
            required: "Enter Input One"
          },
          inputTwo: 
          {
            required: "Enter Input Two"
          }
        }
      
    });
    return this;
 };
    

}) (jQuery);

// Validate Radio
 (function($) {
$.fn.validateRadioBtn = function() {
    $("#myform").validate(
      {
        rules: 
        {
          radio: 
          {
            required: true
          },
          
        },
        messages: 
        {
          radio: 
          {
            required: "Check the Radio Buttons"
          }
        },
        errorPlacement: function(error, element) 
        {
            if ( element.is(":radio") ) 
            {
                error.appendTo( element.parents('#container') );
            }
            else 
            {  
                error.insertAfter( element );
            }
         }
      
    });
    return this;
 };
    

}) (jQuery);



// validate email

(function($) {
$.fn.validateEmail = function() {
    $("#myform").validate(
      {
        rules: 
        {
          email: 
             {
                        required: true,
                        email: true
                    }
        },
       messages: 
        {
          email: 
          {
            required: "Enter a Valid Email Address!"
          }
        }
           });
    return this;
 };
    

}) (jQuery);
// validate phone

(function($) {
$.fn.validatePhoneNumber = function() {
    $("#myform").validate(
      {

rules: {       
           tel: {
               required: true,
               phoneUS: true
           }
        },
messages: { 
    
           tel: {
                       required: "Enter a correct phone number!"                         
                   }
           }
      });
    return this;
 };
    }) (jQuery);
// validate checkbox

(function($) {
$.fn.validateCheckBox = function() {
    $("#myform").validate(
      {

rules: {       
        checkB: {
          	
            required: true
            

}
        },
messages: { 
    
           checkB: {
                       required: "Check one of the Checkboxes!"                         
                   }
           },
errorPlacement: function(error, element) 
        {
            if ( element.is(":checkbox") ) 
            {
                error.appendTo( element.parents('#wrap') );
            }
            else 
            {  
                error.insertAfter( element );
            }
         }
      });
    return this;
 };
    }) (jQuery);