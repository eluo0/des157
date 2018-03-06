

//var x3 = ramdom(0,700);
//var y3 = ramdom(0,350);
function setup(){
var myCanvas = createCanvas(800,300);
myCanvas.parent('canvas');
frameRate(5);
background("#F25757");

}
 function draw(){

   noFill();

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






// var canvas = document.getElementById("canvas");
// canvas.width = document.documentElement.offsetWidth;
// canvas.height = document.documentElement.offsetHeight;
//
// var ctx = canvas.getContext('2d');
//
// ctx.globalCompositeOperation = 'overlay';
//
// var colors = ['rgb(0,0,0)'];
//
// var amount = Math.floor((canvas.width*canvas.height)/25000);
//
// for (var i=0; i <amount; i++){
//   makeTriangle(colors);
// }
//
// function makeTriangle(fillColor){
//   var coordinates = getStart();
//   ctx.fillStyle = fillColor;
//   ctx.beginPath();
//   drawLines(coordinates);
//   ctx.closePath();
//   ctx.fill();
// }
//
// function drawLines(coordinates){
//   ctx.moveTo(coordinates.x, coordinates.y);
//   ctx.lineTo(coordinates.x+ randomInt(-500,400), coordinates.y+ randomInt(-500,400));
//   ctx.lineTo(coordinates.x+ randomInt(-500,400), coordinates.y+ randomInt(-500,400));
//   ctx.lineTo(coordinates.x, coordinates.y);
// }
// function random(min, max){
//   return Math.floor(Math.random()*(max-min+1)) + min;
// }
