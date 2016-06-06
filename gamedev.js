
$( document ).ready(function() {




  $("#gameend").hide();
  //tell JavaScript what div is the sprite - use the div id
  var character = $("#follower");
  var score = 11


var chicken1top;
var chicken2top;
var chicken3top;
var chicken1left;
var chicken2left;
var chicken3left;


function generate(){
	c1top = generator;
	$("#chicken1").css({"top": generator});
	console.log("chicken1: "+generator);
	generator = Math.floor((Math.random()*304)+16); 
	c1left = generator;
	$("#chicken1").css({"left": generator});
	console.log("chicken1 left: "+generator);
	generator = Math.floor((Math.random()*464)+16); 	

	c2top = generator;
	$("#chicken2").css({"top": generator});
	console.log("chicken2 top: "+generator);
	generator = Math.floor((Math.random()*304)+16); 
	c2left = generator;
	$("#chicken2").css({"left": generator});
	console.log("chicken2 left: "+generator);
	generator = Math.floor((Math.random()*464)+16); 

	c3top = generator;
	$("#chicken3").css({"top": generator});
	console.log("chicken3 top: "+generator);
	generator = Math.floor((Math.random()*304)+16); 
	c3left = generator; 
	$("#chicken3").css({"left": generator});
	console.log("chicken3 left: "+generator);
	generator = Math.floor((Math.random()*464)+16); 
}






$(document).keydown(function(e) {
    switch (e.which) {
    case 65:
        $("#follower").stop().animate({
            left: '-=75'
        }); //left arrow key
        break;
    case 87:
        $("#follower").stop().animate({
            top: '-=75'
        }); //up arrow key
        break;
    case 68:
        $("#follower").stop().animate({
            left: '+=75'
        }); //right arrow key
        break;
    case 83:
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
        
        if (score = 10) {
          $("#health10").hide();
          
          window.setInterval(function() {
    //function that makes the magic happen! 
    
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.enemies'), function() {
      if (collision($('#follower'), $(this))) { //another if statement. If #follower DOES hit something, the following will happen:
        
        score = score - 1;
        
        if (score = 9) {
          $("#health9").hide();
          
          window.setInterval(function() {
    //function that makes the magic happen! 

    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.enemies'), function() {
      if (collision($('#follower'), $(this))) { //another if statement. If #follower DOES hit something, the following will happen:
        
          score = score - 1;
        
         if (score = 8) {
          $("#health8").hide();
          
          window.setInterval(function() {
    //function that makes the magic happen! 

    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.enemies'), function() {
      if (collision($('#follower'), $(this))) { //another if statement. If #follower DOES hit something, the following will happen:
        
          score = score - 1;
        
         if (score = 7) {
          $("#health7").hide();
          
          window.setInterval(function() {
    //function that makes the magic happen! 

    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.enemies'), function() {
      if (collision($('#follower'), $(this))) { //another if statement. If #follower DOES hit something, the following will happen:
        
          score = score - 1;
        
         if (score = 6) {
          $("#health6").hide();
          
          window.setInterval(function() {
    //function that makes the magic happen! 

    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.enemies'), function() {
      if (collision($('#follower'), $(this))) { //another if statement. If #follower DOES hit something, the following will happen:
        
          score = score - 1;
        
         if (score = 5) {
          $("#health5").hide();
          
          window.setInterval(function() {
    //function that makes the magic happen! 

    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.enemies'), function() {
      if (collision($('#follower'), $(this))) { //another if statement. If #follower DOES hit something, the following will happen:
        
          score = score - 1;
        
         if (score = 4) {
          $("#health4").hide();
          
          
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
  }, 1000);
          
        }
        
      
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 1000);
          
          
        }
        
      
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 1000);
          
        }
        
      
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 1000);
          
          
        }
        
      
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 1000);
          
          
        }
        
      
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 1000);
          
          
        }
        
      
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 1000);
          
          
        }
        
      
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 1000);

         }
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 1000);
          }
          
          

        //all the actions that happen during a collision go here
        

      }
    });
  }, 1000); //this is how often it checks for a collision
  
  

});// end of doc ready function

