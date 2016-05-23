
$( document ).ready(function() {

var keyW;
var keyA;
var keyS;
var keyD;

function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 68:
      keyD = true;
      break;
    case 83:
      keyS = true;
      break;
    case 65:
      keyA = true;
      break;
    case 87:
      keyW = true;
      break;
    default:
      keyW = false;
      keyA = false;
      keyS = false;
      keyD = false;
  }
}

function onKeyUp(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 68:
      keyD = false;
      break;
    case 83:
      keyS = false;
      break;
    case 65:
      keyA = false;
      break;
    case 87:
      keyW = false;
      break;
  }
}




});

