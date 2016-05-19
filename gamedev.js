
$( document ).ready(function() {


float radius = 50.0;
 int X, Y;
 int nX, nY;
 int delay = 16;


$(document).bind('mousemove', function(e){
    $('#follower').css({
       left:  e.pageX - 30,
       top:   e.pageY
    });
});




});

