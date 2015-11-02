$(document).ready(function(){

	
	$(".goDown").hover(
		function(){
			$(this).addClass('animated infinite bounce');
		}, function(){
			$(this).removeClass('animated infinite bounce');
		}
	);
    
    $(".logo").hover(
        function(){
            $(this).addClass('animated infinite bounce');
        }, function(){
            $(this).removeClass('animated infinite bounce');
        }
    );
    //Fades in navbar on down scroll, fades out at top of page                     
    $(window).scroll(function(){  
        if ($(this).scrollTop() > 500) {
            $('.navigation').addClass('navigation-visible').fadeIn(500);
        } else {
            $('.navigation').fadeOut(500);
        }
    });


    //Hovers the images
    $(".bg").interactive_bg({
            strength: 25,              // Movement Strength when the cursor is moved. The higher, the faster it will reacts to your cursor. The default value is 25.
            scale: 1.05,               // The scale in which the background will be zoomed when hovering. Change this to 1 to stop scaling. The default value is 1.05.
            animationSpeed: "100ms",   // The time it takes for the scale to animate. This accepts CSS3 time function such as "100ms", "2.5s", etc. The default value is "100ms".
            contain: true,             // This option will prevent the scaled object/background from spilling out of its container. Keep this true for interactive background. Set it to false if you want to make an interactive object instead of a background. The default value is true.
            wrapContent: false         // This option let you choose whether you want everything inside to reacts to your cursor, or just the background. Toggle it to true to have every elements inside reacts the same way. The default value is false
    });
     $(".bg").interactive_bg(); // function call
    });

  // change background size on window resize
  $(window).resize(function() {
      $(".bg > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
      })
    })


   //Smooth scrolling to each section
   $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	}); 

});