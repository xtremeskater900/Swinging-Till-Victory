$( document ).ready(function() {





$(document).bind('mousemove', function(e){
    $('#follower').css({
       left:  e.pageX + 20,
       top:   e.pageY
    });
});




});