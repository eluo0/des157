// p5 file

var j = 0;
var v = 1;
var circleColor = 0;
var colorValue = 0;
var xValue = 0;
var yValue = 0;
var xValue2 = 0;
var yValue2 = 0;
var bannerColor = 0;

function setup() {
  var myCanvas = createCanvas(800, 250);
  //has to parent to an id
  myCanvas.parent('mySketch');
  background(255);
}

function draw() {
  colorMode(HSB, 100);
  noStroke();

  if (circleColor > 100) {
    colorValue--;
  } else if (circleColor < 1) {
    colorValue++;
  }
  circleColor += colorValue;
  fill(circleColor, circleColor, 100);


  if (j > 60) {
    v = -1;
  } else if (j < 0) {
    v = 1;
  }
  j += v;

  xValue = random(0, 800);
  yValue = random(0, 250);
  xValue2 = random(0, 800);
  yValue2 = random(0, 250);
  ellipse(xValue, yValue, 50 + j, 50 + j);
  rect(xValue2, yValue2, 10 + j, 10 + j);
}

function mousePressed() {
  colorMode(HSB, 100);
  bannerColor = random(65, 100); // more like blue, red & pink color range
  background(bannerColor, bannerColor, bannerColor);

}
