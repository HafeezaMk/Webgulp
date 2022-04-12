//explore main page
$(document).ready(function(){

[...document.querySelectorAll('.first-column')].map(column => {
column.style.setProperty('--animation', 'slide');
column.style.setProperty('height', '200%');
column.innerHTML = column.innerHTML + column.innerHTML;
});

});



//dropdown hide when user click starts

$(".dropdown-toggle").on("click", function () {
  $(".dropdown-menu").toggle();
});

// hide the menu when an exmple is clicked
$(".dropdown-item").on("click", function(){
    $(".dropdown-menu").hide(); 
      $('.navbar-collapse').collapse('hide');
});
//end

//preloader 
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})




//question main page code
$(document).ready(function(){
  var slides=$('.custom-slide').length;
  var active=1;
  autoplay();
  function autoplay(){

    $('.active-slide').removeClass('active-slide');
    active=(active==slides) ? 1 : active+1;
    $('.custom-slide'+active).addClass('active-slide');
    setTimeout(function(){autoplay();},5000)

  }
});

		// Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });



