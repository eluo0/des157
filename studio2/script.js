//chocolate overlay
var chocolate= document.getElementById('chocolateSection');

var overlayChocolate=document.getElementById('chocolateOverlaySection');

var close=document.getElementById("close");

//money overlay
var money = document.getElementById('moneySection');
var overlayMoney=document.getElementById('moneyOverlaySection');
var close3=document.getElementById('close3');

//pen overlayMoney
var pen = document.getElementById('penSection');
var overlayPen=document.getElementById('penOverlaySection');
var close2=document.getElementById('close2');

//pen
pen.addEventListener('click',function(){
  overlayPen.style.display="block";
})

close2.addEventListener('click', function(){
  overlayPen.style.display="none";
})

//chocolate
chocolate.addEventListener('click',function(){
  overlayChocolate.style.display="block";
})

close.addEventListener('click', function(){
  overlayChocolate.style.display="none";
})

//money
money.addEventListener('click', function(){
overlayMoney.style.display="block";
})
close3.addEventListener('click',function(){
  overlayMoney.style.display="none";
})
