(function($) {
$.fn.selectMobileMenu = function() {  
$("<select />").appendTo("nav");

$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Menu"
}).appendTo("nav select");

$("nav a").each(function() {
 var setVal = $(this);
 $("<option />", {
     "value"   : setVal.attr("href"),
     "text"    : setVal.text()
 }).appendTo("nav select");
});

$("nav select").change(function() {
  window.location = $(this).find("option:selected").val();
});
    return this;
 };


}) (jQuery);