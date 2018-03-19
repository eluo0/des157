"use strict";

var sadFilter = document.getElementById('sadFilter');
var sadOverlay = document.getElementById('sadOverlay');
var pageOverlay = document.getElementById("pageOverlay");
var sectionH = -700;
var gameOverY = 700;
var gameOverAnim;

var hueFilter = document.getElementById('hueFilter');
var clear = document.getElementById('clear');
var webgl_overlay = document.getElementById('webgl');
var overlay = document.getElementById("overlay");
var footer = document.querySelector("footer");
var nav = document.querySelector("#navigation");
var webcamHeading = document.querySelector("#webcamHeading");
var controls = document.querySelector("#controls");
var emotion_icons = document.querySelector("#emotion_icons");
var exit = Math.random() > 0.9

var sound = new Audio("media/fight.mp3");

function preload() {
   // Creative Common license
   //sound = loadSound("media/fight.mp3");
}


sadFilter.addEventListener("click", playGameOverAnim);

hueFilter.addEventListener('click', hue);

clear.addEventListener('click', function(){
  videoel.style.filter="none";
  ctrack.stop(vid);
  overlay.style.display="none";
  moodText.style.display="none";
  emotion_icons.style.display="none";
  reset();

});




function setup(){
var myCanvas = createCanvas(1000,800);
myCanvas.parent('canvas');
frameRate(5);
background("#F25757");
sound = loadSound("media/fight.mp3");

}

 function draw(){
   noFill();
   stroke('#424141');

   var distance1 = random(-50,50);
   var distance2 = random(-55,43);
   var distance3 = random(-48,59);
   var dotX = random(0,150);
   var dotY = random(0,50);
   dotX = mouseX +dotX;
   dotY = mouseY -dotY;
   var x1;
   var y1;
   var x2;
   var y2;
   var x3;
   var y3;
   x1 = mouseX+distance1;
   y1 = mouseY+distance1;
   x2 = mouseX-distance2;
   y2 = mouseY+distance2;
   x3 = mouseX+distance3;
   y3 = mouseY+distance3;

   triangle(x1, y1,x2, y2,x3, y3);
   ellipse(dotX, dotY,2,2);
   ellipse(x1, y1,2,2);
   ellipse(x2, y2,2,2);
  ellipse(dotX-100, dotY-120,2,2);
}

function mousePressed(){
  background("#F25757");
}
function reset(){
  cancelAnimationFrame (gameOverAnim);
  sadOverlay.style.display = "none";
  gameOverY = 700;
  sound.pause();
}





function playGameOverAnim(){
  // clear intervals and timeout in case user
  // resets before timeout is reached

 // turn on game over graphic

  sadOverlay.style.display = "block";

sadOverlay.style.filter="sepia(10%)";
  // check right edge and move gameOverImg
  if (gameOverY > sectionH){
  gameOverY=gameOverY-2;
  } else {
    gameOverY = 700;
  }
  sadOverlay.style.top = gameOverY + 'px';

  // recursive call back to the same function
  gameOverAnim = requestAnimationFrame(playGameOverAnim);
  sound.play();

}




function clearFilter(){
  //videoel.style.filter="none";
  //overlaySad.style.display="none";
  videoel.style.filter ="none";

}

function hue(){
videoel.style.filter="hue-rotate(270deg)";
}


var fullS = document.querySelector("#fullscreen");
var screenSize = document.querySelector("#screenSize");
fullS.addEventListener("click", requestFullScreen);

function requestFullScreen() {
  var body = document.querySelector('body');
  // expand section height
  screenSize.style.height = '100%';
  fullS.style.display = "none";
  footer.style.display="none";
  nav.style.display="none";
  //webcamHeading.style.display="none";
  controls.style.left ="20%";
  controls.style.top ="87%";
  vid.width= vid.width*1.3;
  vid.height=vid.height*1.3;


  // going fullscreen. supports most browsers and their versions
  var requestMethod =
    body.requestFullScreen ||
    body.webkitRequestFullScreen ||
    body.mozRequestFullScreen ||
    body.msRequestFullScreen;

  if (requestMethod) {
    // native full screen
    requestMethod.call(body);
  } else if (typeof window.ActiveXObject !== "undefined") {
    // older IE
    var wscript = new ActiveXObject("WScript.Shell");

    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

//  bind a listener to the document for fullscreenchange
// to reset section height and to show fullScrren button
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
  console.log('exitHandler');
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
      vid.width= vid.width*0.77;
      vid.height=vid.height*0.77;
      controls.style.top ="75%";
      controls.style.left ="23%";
      footer.style.display="block";
      nav.style.display="block";
      //webcamHeading.style.display="block";
      fullS.style.display = 'inline';
      section.style.height = '320px';
    }
}
