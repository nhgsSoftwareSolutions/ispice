var current_img = 0
$(function(){animate(0)})
console.log("ran?")
function right(){
    if(current_img < $("#gallery").children().length-1){
        current_img++
    }
    animate(current_img)
}

function left(){
    if(current_img > 0){
        current_img--
    }
    animate(current_img)
}

function animate(n){
    $("#gallery").children().each(function(i){
        $('#caption p.'+String(i)).hide()
        if(i == n){
            $(this).removeClass( "bg" ).addClass( "fg" );
            console.log($(this).position().left);
            $('#gallery').animate({
                left: ($(window).width() - $(this).width())/2 -$(this).position().left
            }, 500);
        } else{
            $(this).removeClass( "fg" ).addClass( "bg" );

        }
    })
    $('#caption p.'+String(n)).fadeIn("slow")
}
