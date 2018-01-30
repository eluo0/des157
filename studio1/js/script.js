// P5 script
'use strict';

var results= document.getElementById("results");
var myMsg= document.getElementById("myMsg");

document.f.onsubmit = processForm;
document.f.onreset = resetForm;

function processForm(){

  var oneInput = document.f.one.value;
  var twoInput = document.f.two.value;
  var threeInput = document.f.three.value;
  var fourInput = document.f.four.value;
  var fiveInput = document.f.five.value;
  var sixInput = document.f.six.value;
  var sevenInput = document.f.seven.value;
  var eightInput = document.f.eight.value;
  var nineInput = document.f.nine.value;
  var tenInput = document.f.ten.value;
  var elevenInput = document.f.eleven.value;

  myMsg.innerHTML="Last night I saw him again. When he looks at me with those "+oneInput+" eyes, it takes my "+ twoInput+" go pitter patter, and I feel I have "+threeInput+" in my "+ fourInput+". When he scruches his "+ fiveInput+", I want to "+ sixInput+" him softly. He is so "+sevenInput+". Tomorrow he will be my "+ eightInput+". I feel so "+nineInput+". My heart is still with love and "+ tenInput+". "+elevenInput+ " love is hard to resist!";
  return false;
}

function resetForm(){

  myMsg.innerHTML="";
  return false;
}
