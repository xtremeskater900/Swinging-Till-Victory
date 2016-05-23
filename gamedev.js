
$( document ).ready(function() {

var velY;
var velX;
var powerUp;
var amountOfEnemys = 20;
var health;
var premilsec1;
var premilsec2;
var premilsec3;
var posX;
var posY;
var ctx;
var keyW;
var keyA;
var keyS;
var keyD;
var score;
var level;
var prescore;
var running;
var enemy;
var enemyobj;
var prescoreadd;
var highScore = getHighScore();
if (highScore == "") {
  highScore = "NOT SET";
}

function reset() {
  document.body.innerHTML = "<button type='button' onclick='start()'>START</button><br>" +
    "<p>HIGHSCORE: " + highScore + "</p>";
}

window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

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

function start() {
  document.body.innerHTML = "<canvas id='canvas' width='" +
    (window.screen.width / 2) + "' height='" + (window.screen.height / 2) + "'></canvas>"
  ctx = document.getElementById('canvas').getContext('2d');
  health = 100;
  premilsec1 = Date.now().valueOf();
  premilsec2 = Date.now().valueOf();
  premilsec3 = Date.now().valueOf();
  posX = (window.screen.width / 4);
  posY = (window.screen.height / 4);
  keyW = false;
  keyA = false;
  keyS = false;
  keyD = false;
  score = 0;
  level = 0;
  prescore = 0;
  prescoreadd = 100;
  running = true;
  powerUp = [];
  velX = 2;
  velY = 2;
  enemy = new Array(amountOfEnemys);
  for (i = 0; i < enemy.length; i++) {
    var tmp = Math.floor((Math.random() * 20) + 10);
    enemyobj = {
      posX: Math.floor((Math.random() * (window.screen.width / 2 - tmp - 1)) + 1),
      posY: Math.floor((Math.random() * (window.screen.height / 2 - tmp - 1)) + 1),
      width: tmp,
      height: tmp,
      velX: Math.floor((Math.random() * 5) + 1),
      velY: Math.floor((Math.random() * 5) + 1),
      type: (Math.floor((Math.random() * 3) + 1))
    };
    enemy[i] = enemyobj;
  }
  window.requestAnimationFrame(draw);
}

function draw() {
  if (running == true) {
    ctx.clearRect(0, 0, (window.screen.width / 2), (window.screen.height / 2));
    ctx.fillStyle = "black";
    ctx.fillRect(posX, posY, 15, 15);
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.font = "10px Arial";
    ctx.fillText("LEVEL: " + level + " SCORE: " +
      score + " HEALTH: " + health, (window.screen.width / 4), (window.screen.height / 100));
    renderEnemy();
    collisionDetect();
    if (Math.floor((Math.random() * 2000) + 1) == 1111) {
      var tmp = Math.floor((Math.random() * 20) + 10);
      enemyobj = {
        posX: Math.floor((Math.random() * (window.screen.width / 2 - tmp - 1)) + 1),
        posY: Math.floor((Math.random() * (window.screen.height / 2 - tmp - 1)) + 1),
        width: tmp,
        height: tmp,
        type: (Math.floor((Math.random() * 3) + 1))
      };
      powerUp.push(enemyobj);
    }
    for (i = 0; i < powerUp.length; i++) {
      ctx.fillStyle = "green";
      ctx.fillRect(powerUp[i].posX, powerUp[i].posY, powerUp[i].width, powerUp[i].height)
    }
    if (posY >= 0) {
      if (keyW) {
        posY -= velY;
        if (Date.now() > (premilsec3 + 100)) {
          score++;
          premilsec3 = Date.now();
        }
      }
    }
    if (posX >= 0) {
      if (keyA) {
        posX -= velX;
        if (Date.now() > (premilsec3 + 100)) {
          score++;
          premilsec3 = Date.now();
        }
      }
    }
    if (posX <= (window.screen.width / 2 - 15)) {
      if (keyD) {
        posX += velX;
        if (Date.now() > (premilsec3 + 100)) {
          score++;
          premilsec3 = Date.now();
        }
      }
    }
    if (posY <= (window.screen.height / 2 - 15)) {
      if (keyS) {
        posY += velY;
        if (Date.now() > (premilsec3 + 100)) {
          score++;
          premilsec3 = Date.now();
        }
      }
    }
    if (Date.now() > (premilsec1 + 300)) {
      score++;
      premilsec1 = Date.now();
    }
    if (health < 0) {
      gameOver("lose");
    } else if (health < 30) {
      if (Date.now() > (premilsec2 + 1000)) {
        health++;
        premilsec2 = Date.now();
      }
    }
    if (score >= 3000 && level == 10) {
      gameOver("win");
    }
    if (score > (prescore + prescoreadd)) {
      level++;
      prescore = score;
      prescoreadd += 50;
    }
    window.requestAnimationFrame(draw);
  }
}

function gameOver(x1) {
  if (x1 === "lose") {
    console.log("player lost");
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.font = "100px Arial";
    ctx.fillText("YOU LOSE", (window.screen.width / 4), (window.screen.height / 4));
    running = false;
    if (score > highScore || highScore == "NOT SET") {
      deleteHighScore();
      highScore = score;
      setHighScore();
    }
  } else if (x1 === "win") {
    console.log("player won");
    ctx.fillStyle = "green";
    ctx.textAlign = "center";
    ctx.font = "100px Arial";
    ctx.fillText("YOU WON", (window.screen.width / 4), (window.screen.height / 4));
    running = false;
    if (score > highScore || highScore == "NOT SET") {
      deleteHighScore();
      highScore = score;
      setHighScore();
    }
  } else {
    console.log("error");
  }
}

function renderEnemy() {
  ctx.fillStyle = "#FF0000";
  for (i = 0; i < enemy.length; i++) {
    if (level == 0) {
      if (i > (Math.floor(amountOfEnemys / 15))) {
        break;
      }
    } else if (level == 1) {
      if (i > (Math.floor(amountOfEnemys / 12.5) + 1)) {
        break;
      }
    } else if (level == 2) {
      if (i > (Math.floor(amountOfEnemys / 10) + 2)) {
        break;
      }
    } else if (level == 3) {
      if (i > (Math.floor(amountOfEnemys / 7.5) + 2)) {
        break;
      }
    } else if (level == 4) {
      if (i > (Math.floor(amountOfEnemys / 6) + 2)) {
        break;
      }
    } else if (level == 5) {
      if (i > (Math.floor(amountOfEnemys / 5) + 2)) {
        break;
      }
    } else if (level == 6) {
      if (i > (Math.floor(amountOfEnemys / 4) + 2)) {
        break;
      }
    } else if (level == 7) {
      if (i > (Math.floor(amountOfEnemys / 3) + 1)) {
        break;
      }
    } else if (level == 8) {
      if (i > (Math.floor(amountOfEnemys / 2))) {
        break;
      }
    } else if (level == 9) {
      if (i > (Math.floor(amountOfEnemys / 1.5))) {
        break;
      }
    } else if (level == 10) {
      if (i > (amountOfEnemys - 1)) {
        break;
      }
    }
    if (enemy[i].type == 1 || enemy[i].type == 2) {
      ctx.fillRect(enemy[i].posX, enemy[i].posY, enemy[i].width, enemy[i].height);
    } else if (enemy[i].type == 3) {
      ctx.beginPath();
      ctx.arc((enemy[i].posX + enemy[i].width / 4), (enemy[i].posY + enemy[i].width / 4), (enemy[i].width / 2), 0, (2 * Math.PI));
      ctx.fill();
    }
    if (enemy[i].posX >= (window.screen.width / 2 - enemy[i].width) || (enemy[i].posX <= 0)) {
      enemy[i].velX *= -1;
    }
    if (enemy[i].posY >= (window.screen.height / 2 - enemy[i].height) || (enemy[i].posY <= 0)) {
      enemy[i].velY *= -1;
    }
    if (enemy[i].type == 3) {
      if (enemy[i].posX > posX && enemy[i].velX > 0) {
        enemy[i].velX = -0.5;
      } else if (enemy[i].posX < posX && enemy[i].velX < 0) {
        enemy[i].velX = 0.5;
      } else if (enemy[i].posY > posY && enemy[i].velY > 0) {
        enemy[i].velY = -0.5;
      } else if (enemy[i].posY < posY && enemy[i].velY < 0) {
        enemy[i].velY = 0.5;
      }
    }
    enemy[i].posX += enemy[i].velX;
    enemy[i].posY += enemy[i].velY;
  }
}

function collisionDetect() {
  for (i = 0; i < powerUp.length; i++) {
    if ((powerUp[i].posY + powerUp[i].height) > posY && powerUp[i].posY < (posY + 15)) {
      if ((powerUp[i].posX + powerUp[i].width) > posX && powerUp[i].posX < (posX + 15)) {
        if (powerUp[i].type == 1) {
          health += 30;
          powerUp.splice(i, 1);
        } else if (powerUp[i].type == 2) {
          score += 100;
          powerUp.splice(i, 1);
        } else if (powerUp[i].type == 3) {
          velX *= 2;
          velY *= 2;
          setTimeout(function() {
            velX /= 2;
            velY /= 2;
          }, 30000)
          powerUp.splice(i, 1);
        }
      }
    }
  }
  for (i = 0; i < enemy.length; i++) {
    if (level == 0) {
      if (i > (Math.floor(amountOfEnemys / 15))) {
        break;
      }
    } else if (level == 1) {
      if (i > (Math.floor(amountOfEnemys / 12.5) + 1)) {
        break;
      }
    } else if (level == 2) {
      if (i > (Math.floor(amountOfEnemys / 10) + 2)) {
        break;
      }
    } else if (level == 3) {
      if (i > (Math.floor(amountOfEnemys / 7.5) + 2)) {
        break;
      }
    } else if (level == 4) {
      if (i > (Math.floor(amountOfEnemys / 6) + 2)) {
        break;
      }
    } else if (level == 5) {
      if (i > (Math.floor(amountOfEnemys / 5) + 2)) {
        break;
      }
    } else if (level == 6) {
      if (i > (Math.floor(amountOfEnemys / 4) + 2)) {
        break;
      }
    } else if (level == 7) {
      if (i > (Math.floor(amountOfEnemys / 3) + 1)) {
        break;
      }
    } else if (level == 8) {
      if (i > (Math.floor(amountOfEnemys / 2))) {
        break;
      }
    } else if (level == 9) {
      if (i > (Math.floor(amountOfEnemys / 1.5))) {
        break;
      }
    } else if (level == 10) {
      if (i > (amountOfEnemys - 1)) {
        break;
      }
    }
    if ((enemy[i].posY + enemy[i].height) > posY && enemy[i].posY < (posY + 15)) {
      if ((enemy[i].posX + enemy[i].width) > posX && enemy[i].posX < (posX + 15)) {
        health--;
      }
    }
  }
}

function setHighScore() {
  cvalue = highScore;
  var d = new Date();
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = "highScore=" + cvalue + "; " + expires;
}

function getHighScore() {
  var name = "highScore=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteHighScore() {
  document.cookie = "highScore=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

function pause() {
  running = false;
}

function play() {
  if (running == false) {
    running = true;
    window.requestAnimationFrame(draw);
  }
}
reset();
});

