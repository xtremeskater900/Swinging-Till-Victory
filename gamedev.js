$( document ).ready(function() {





$(document).bind('mousemove', function(e){
    $('#follower').css({
       left:  e.pageX,
       top:   e.pageY
    });
});




});