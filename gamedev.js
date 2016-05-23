
$( document ).ready(function() {






//These settings are configurable


var w = 500
var h = 500

var px = 0
var py = 0
var ox = 0
var oy = 0



function setup() {
  createCanvas(w, h)
    /* position: absolute;
     top: 50%;
     left: 50%;*/
}

function keyPressed() {
  //y forward
  //x back

  

  //Added arrow key support for Sydney
  var moveUp = keyCode == 38 //|| key=="W"
  var moveLeft = keyCode == 37 //|| key=="S"
  var moveDown = keyCode == 40 //|| key=="A"
  var moveRight = keyCode == 39 //|| key=="D"

  var invertUp = key == "W"
  var invertDown = key == "S"
  var invertLeft = key == "A"
  var invertRight = key == "D"

  var IC = []
  var HAxis = false;

  if (invertUp)
    IC = [h / 2 - 15 - 30 * py, w / 2 - 15 - 30 * px]
  if (invertDown)
    IC = [h / 2 + 15 - 30 * py, w / 2 - 15 - 30 * px]
  if (invertLeft)
    IC = [w / 2 - 15 - 30 * px, h / 2 + 15 - 30 * py]
  if (invertRight)
    IC = [w / 2 + 15 - 30 * px, h / 2 + 15 - 30 * py]

}

});

