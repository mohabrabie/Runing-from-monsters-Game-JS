var body = document.getElementsByTagName("body")[0];
var charImg = document.getElementsByTagName("img")[0];


var charHP = document.getElementById("characterHP");
var monsterHP = document.getElementById("monsterHP");
var monsterSpeed = document.getElementById("monsterSpeed").children[0];;
var characterSpeed = document.getElementById("characterSpeed").children[0];;

// var health = document.getElementById("health");
// var speed = document.getElementById("speed");
// var monsterHealth = document.getElementById("monster-health");
// var timer = document.getElementById("timer");


var targetX;
var targety;

token = "0";
var food = {
  num : 1,
  x : 0,
  y : 50,
  id:0,
}
var character = {
  id:0,
  x:600,
  y:300,
  speed:10,
  health:100,
  currentImg:"",
}
var monster = {
  id:0,
  x:300,
  y:50,
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


var importheader = document.createElement('script');
importheader.src = 'JS/headers.js';
document.head.appendChild(importheader);


window.onload = function(){
  document.getElementById('startbtn').click();
}


let audioSource = document.querySelector("#audio-player");
let songsList = {
  background1:"sounds/Forest_birds.wav",
  background2:"sounds/GHOSTS.wav",
  Eating:"sounds/Human_Bite_Food.mp3",
  Hit:"sounds/wallbody_impact.wav",
  win:"sounds/win.wav",
  running:"sounds/running.wav",
  levelUp:"sounds/level-up.wav",
  Gamestart:"sounds/game-start.ogg",
  GameOver:"sounds/game-over.wav",
};

let keys = Object.keys(songsList);

