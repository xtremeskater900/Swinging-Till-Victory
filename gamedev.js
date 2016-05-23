
$( document ).ready(function() {





$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $("#follower").stop().animate({
            left: '-=50'
        }); //left arrow key
        break;
    case 38:
        $("#follower").stop().animate({
            top: '-=50'
        }); //up arrow key
        break;
    case 39:
        $("#follower").stop().animate({
            left: '+=50'
        }); //right arrow key
        break;
    case 40:
        $("#follower").stop().animate({
            top: '+=50'
        }); //bottom arrow key
        break;
    }
})



});

