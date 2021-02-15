var l= 1;                 
var timeminute;
function myLoop() {         
  setTimeout(function() {   
    
    // health.innerHTML = `<p class="inner-text">you: ${character.health}</p>` ;  
    // speed.innerHTML = `<p class="inner-text">speed: ${character.speed}</p>` ;
    // monsterHealth.innerHTML = `<p class="inner-text">monster: ${monster.health}</p>` ; 
    // timer.innerHTML = `<p class="inner-text">Timer: ${i}</p>`  
    // l++;         
    // timeminute=document.getElementById("timmin").innerHTML;       
    myLoop();
         
  }, 100) 
  if(character.health <= 0){
    modalText.innerHTML = `<p id="modal-text">Game Over</p><button id="contBtn" onclick="location.href='menu.html'">Continue playing</button>`
    modal.style.display = "block";
    youlose();
    
//game over timer 
  }else if(timemin == 1){
    modalText.innerHTML = `<p id="modal-text">You Won!</p><button id="contBtn" onclick="location.href='menu.html'">Continue playing</button>`
    document.getElementById("modal-text").style.color = "green";
    modalText.style.backgroundImage = "url('/images/pics/gh.jpg')";
    modal.style.display = "block";
    gameOver();
  }

}  

myLoop();



var modal = document.getElementById("myModal");



var modalText = document.getElementsByClassName("modal-content")[0]


var contBtn = document.getElementById("contBtn");


contBtn.onclick = function() {
  modal.style.display = "none";
  character.health = 100;
}