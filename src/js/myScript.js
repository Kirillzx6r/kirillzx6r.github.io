"use strict"
$(document).ready(function(){
      $('a[href^="#"]').click(function(){
      let valHref =$(this).attr("href");
      $('html,body').animate({scrollTop: $(valHref).offset().top - 200 + "px"})
  });
    
new WOW().init();
});