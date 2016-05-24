
$( document ).ready(function() {



$( "#follower" ).keydown({ containment: "#exploreBody", scroll: false });

$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $("#follower").stop().animate({
            left: '-=75'
        }); //left arrow key
        break;
    case 38:
        $("#follower").stop().animate({
            top: '-=75'
        }); //up arrow key
        break;
    case 39:
        $("#follower").stop().animate({
            left: '+=75'
        }); //right arrow key
        break;
    case 40:
        $("#follower").stop().animate({
            top: '+=75'
        }); //bottom arrow key
        break;
    }
})



});

