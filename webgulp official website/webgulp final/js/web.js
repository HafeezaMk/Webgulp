/*smooth scroll*/
$('.nav').localScroll();
$('.circle').localScroll();
$('footer').localScroll();

//navbar scroll
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else
    {
        $('nav').removeClass('black');
    }
    })

/*portfolio carousel*/
$('#slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

/*typewriter*/
var typed = new Typed(".type", {
  strings: ["welcome to webgulp",
            "High quality website designing"],
    loop:true,
    typeSpeed:60,
    backspeed:40,
    backDelay:1000,
});

/*navbar collapsing link*/
$(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

/*bubble loader*/
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 1000);
	
});

/*code makes when user scrolls down navbar change to black*/
$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 200) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});


