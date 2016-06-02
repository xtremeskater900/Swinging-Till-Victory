
$( document ).ready(function() {




  $("#gameend").hide();
  //tell JavaScript what div is the sprite - use the div id
  var character = $("#follower");
  var score = 4


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

  //this is where the JavaScript collision starts. First we define all the variables of how the collision will happen
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  window.setInterval(function() {
    //function that makes the magic happen! 

    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.enemies'), function() {
      if (collision($('#follower'), $(this))) { //another if statement. If #follower DOES hit something, the following will happen:
        
        score = score - 1;
        
        if (score = 3) {
          $("#health3").hide();
          
          window.setInterval(function() {
    //function that makes the magic happen! 
    
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.enemies'), function() {
      if (collision($('#follower'), $(this))) { //another if statement. If #follower DOES hit something, the following will happen:
        
        score = score - 1;
        
        if (score = 2) {
          $("#health2").hide();
          
          window.setInterval(function() {
    //function that makes the magic happen! 

    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.enemies'), function() {
      if (collision($('#follower'), $(this))) { //another if statement. If #follower DOES hit something, the following will happen:
        
          score = score - 1;
        
         if (score = 1) {
          $("#health1").hide();
          
          
          
          
        }
        
      
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 200);
         }
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 200);
          }
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 200); //this is how often it checks for a collision
  
  

});// end of doc ready function

