"use strict";
var colorFilter = document.getElementById('colorFilter');
var hueFilter = document.getElementById('hueFilter');
var clear = document.getElementById('clear');
var webgl_overlay = document.getElementById('webgl');

colorFilter.addEventListener("click", saturation);
hueFilter.addEventListener('click', hue);
clear.addEventListener('click', clearFilter);

function saturation(){
  videoel.style.filter="saturate(4)";
}
function clearFilter(){
  videoel.style.filter="none";
}
function hue(){
videoel.style.filter="hue-rotate(270deg)";
}
