$(document).ready(function() {

  $(".search-icon").click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $(".search-box").css({
      "border-bottom": '1px solid black'
    });
    $(".search-box").animate({
      "width": "200px"},
      500, function() {
      /* stuff to do after animation is complete */
      $(".search-icon").fadeOut(100);
      $(".fa-times").fadeIn(100);
    });

});

$(".fa-times").click(function(event) {
  /* Act on the event */
  event.preventDefault();
  $(".search-box").animate({
    "width": "0"},
    500, function() {
    /* stuff to do after animation is complete */
    $(".fa-times").fadeOut(100);
    $(".search-icon").fadeIn(100);

    $(".search-box").css({
      "border-bottom": '0px solid black'
    });

  });
});


//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 150) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scroll-to-top').click(function(event){
    event.preventDefault();
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


});
