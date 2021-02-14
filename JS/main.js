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

var i = 1;                 

function myLoop() {         
  setTimeout(function() {   
    health.innerHTML = `<p class="inner-text">you: ${character.health}</p>` ;  
    speed.innerHTML = `<p class="inner-text">speed: ${character.speed}</p>` ;
    monsterHealth.innerHTML = `<p class="inner-text">monster: ${monster.health}</p>` ; 
    timer.innerHTML = `<p class="inner-text">Timer: ${i}</p>`  
    i++;                
    myLoop();
         
  }, 500) 
  if(character.health <= 0){
    modalText.innerHTML = `<p id="modal-text">Game Over</p><button id="contBtn">Continue playing</button>`
    modal.style.display = "block";
    
  }else if(i == 100){
    modalText.innerHTML = `<p id="modal-text">You Won!</p><button id="contBtn">Continue playing</button>`
    document.getElementById("modal-text").style.color = "green";
    modalText.style.backgroundImage = "url('/images/pics/gh.jpg')";
    modal.style.display = "block";
  }

}  

myLoop();



var modal = document.getElementById("myModal");



var modalText = document.getElementsByClassName("modal-content")[0]

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal

// if(character.health <= 0){
//   modal.style.display = "block";
// }
// modalText.innerHTML = `<p id="modal-text">Game Over</p><button id="contBtn">Continue playing</button>`

var contBtn = document.getElementById("contBtn");


contBtn.onclick = function() {
  modal.style.display = "none";
  character.health = 100;
}