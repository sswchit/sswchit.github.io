AOS.init({

    	offset: 200, 
    	duration: 1000,

    });

AOS.refresh();


jQuery(document).ready(function ($) {
   $(window).scroll(function() {
   var scroll = $(window).scrollTop();
   if (scroll > 0) {
       $(".navbar").addClass("active");
   }
   else {
       $(".navbar").removeClass("active");
   }
});
});
