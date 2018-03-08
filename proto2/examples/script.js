"use strict";
var colorFilter = document.getElementById('colorFilter');
var hueFilter = document.getElementById('hueFilter');
var clear = document.getElementById('clear');
var webgl_overlay = document.getElementById('webgl');

colorFilter.addEventListener("click", saturation);
hueFilter.addEventListener('click', hue);
clear.addEventListener('click', clearFilter);

function setup(){
var myCanvas = createCanvas(900,800);
myCanvas.parent('canvas');
frameRate(5);
background("#F25757");

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
function saturation(){
  videoel.style.filter="saturate(4)";
}
function clearFilter(){
  videoel.style.filter="none";
}
function hue(){
videoel.style.filter="hue-rotate(270deg)";
}



onePageScroll(".main", {
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 800,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
});
