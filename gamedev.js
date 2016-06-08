
$( document ).ready(function() {

    animateDiv();
    animateDiv2();
    animateDiv3();
    




  $("#gameend").hide();
  //tell JavaScript what div is the sprite - use the div id
  var character = $("#follower");
  var score = 11


$(document).keydown(function(e) {
    switch (e.which) {
    case 65:
        $("#follower").stop().animate({
            left: '-=75'
        }); //D key
        break;
    case 87:
        $("#follower").stop().animate({
            top: '-=75'
        }); //W key
        break;
    case 68:
        $("#follower").stop().animate({
            left: '+=75'
        }); //A key
        break;
    case 83:
        $("#follower").stop().animate({
            top: '+=75'
        }); //S key
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
          window.location.href="gameover.html";

          
          
          
          
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



  
  

});// end of doc ready function







function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('#chicken1').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#chicken1').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}




function animateDiv2(){
    var newq = makeNewPosition();
    var oldq = $('#chicken2').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#chicken2').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}



function animateDiv3(){
    var newq = makeNewPosition();
    var oldq = $('#chicken3').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#chicken3').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}















