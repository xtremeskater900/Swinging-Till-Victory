$( document ).ready(function() {





$(document).bind('mousemove', function(e){
    $('#follower').css({
       left:  e.pageX - 30,
       top:   e.pageY
    });
});




});