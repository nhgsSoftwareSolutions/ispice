var scrolled = false;
$(document).scroll(function() {
  if(!scrolled){
	scrolled = true;
	console.log("scrolled!");
	$('#scrollrem').slideUp(1000);
	$('#scrollrem-overlay').slideUp(1000);
  }
});


var recentScroll = false;
$(document).scroll(function() {
  if(!recentScroll){
	recentScroll = true;
  };
});

function smoothScroll(elt){
	console.log($(elt).offset().top-40);
	$('html, body').animate({scrollTop: $(elt).offset().top-40}, 500);
}
