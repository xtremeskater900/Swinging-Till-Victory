
$( document ).ready(function() {


void mouseMoved(){
   nX = mouseX;
   nY = mouseY;  
 }


$(document).bind('mousemove', function(e){
    $('#follower').css({
       left:  e.pageX - 30,
       top:   e.pageY
    });
});




});

