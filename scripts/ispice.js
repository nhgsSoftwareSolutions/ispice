$(function(){
    $.ajax({
        url : "event.txt",
        dataType: "text",
        success : function (data) {
            console.log(data)
            text = data.split("\n")
            $("#eventName").html(text[0])
            $("#eventPlace").html(text[1])
            $("#eventTime").html(text[2])
        }
    });
});


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

var page_width = $("#tile0 .twrapper").children().first().outerHeight()
function fwd(tile){
    var wrap = $(tile+" .twrapper")
	page_width = wrap.children().first().outerHeight()
    var page = -parseInt(wrap.css("margin-left").slice(0,-2))/page_width
    if(page >= wrap.children(".pane").length - 1){
        wrap.animate({marginLeft: '0'}, 500);
    } else {
        wrap.animate({marginLeft: '-=' + page_width.toString()}, 500);
    }
}
var resizeTimer
$(window).resize(function(){
	// clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
		console.log("ran")
		$(".twrapper").each(function(){
			var new_width = $(this).children().first().outerHeight()
			console.log(new_width, page_width)
			var page = -parseInt($(this).css("margin-left").slice(0,-2))/page_width
			if(page <= $(this).children().length){
				var pos = -page*new_width
			} else {
				var pos = 0
			}
			$(this).css("margin-left",String(pos)+'px')
		})
	}, 250);
})
