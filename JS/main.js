



var body = document.getElementsByTagName("body")[0];
var charImg = document.getElementsByTagName("img")[0];



var targetX;
var targety;

token = "0";
var food = {
  num : 1,
  x : 0,
  y : 0,
  id:0,
}
var character = {
  id:0,
  x:0,
  y:0,
  speed:10,
  health:100,
  currentImg:"",
}
var monster = {
  id:0,
  x:300,
  y:0,
  speed:5,
  dmg:6,
  velX:0,
  velY:0,
  perSec:80,
  health:300,
}
var foodListOnMap = [];




var importLevel = document.createElement('script');
importLevel.src = 'JS/levelsValues.js';
document.head.appendChild(importLevel);

var importcharacter= document.createElement('script');
importcharacter.src = 'JS/TheCharacter.js';
document.head.appendChild(importcharacter);

var importfood = document.createElement('script');
importfood.src = 'JS/TheFood.js';
document.head.appendChild(importfood);

var importmonster = document.createElement('script');
importmonster.src = 'JS/TheMonster.js';
document.head.appendChild(importmonster);


window.onload = function(){
  document.getElementById('startbtn').click();
}