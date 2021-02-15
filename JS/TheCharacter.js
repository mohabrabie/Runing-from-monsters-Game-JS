let storage = JSON.parse(localStorage.getItem('CharID'));

let player1 = document.getElementById("player");
let character1_positions = 
[
"../images/gif/top.gif",
"../images/gif/down.gif",
"../images/gif/left.gif",
"../images/gif/right.gif",
"../images/gif/hitLeft.gif",
"../images/gif/hitRight.gif",
"../images/gif/standLeft.gif",
"../images/gif/standRight.gif"
];

let  character2_positions = [
"../images/gif/c1top.gif",
"../images/gif/c1down.gif",
"../images/gif/c1left.gif",
"../images/gif/c1right.gif",
"../images/gif/c1hitLeft.gif",
"../images/gif/c1hitRight.gif",
"../images/gif/c1standLeft.gif",
"../images/gif/c1standRight.gif"
]

if(storage['characterId'] == 1 )
{
   player=character1_positions;
   character.id = 1;
}
else if(storage['characterId'] == 2  )
{
  character.id = 2;
    player=character2_positions;
}

player1.src = player[7];
player1.style.width = "80px";

document.addEventListener('keydown', function(e) {
  updateGameStatus()
    if(e.code === "ArrowRight" && character.x < 1260){
      changeImge("right");
      character.x += character.speed;
    }else if(e.code === "ArrowLeft" && character.x > 30){
      changeImge("left");
      character.x -= character.speed;
    }else if(e.code === "ArrowUp" && character.y > 140){
      changeImge("top");
      character.y -= character.speed;
    }else if(e.code === "ArrowDown" && character.y < 530){
      changeImge("down");
      character.y += character.speed;
    }else if(e.code === "Space" ){
      if(character.currentImg === "right" || character.currentImg === "standRight")
      {
        var diffX = Math.floor(monster.x - character.x);
        var diffY = Math.floor(monster.y - character.y);
        charImg.src = player[5];
        if(storage['characterId'] == 2)
        {
          charImg.style.width = 200 + "px";
        }
        if(diffX < 180 && diffX > 0)
        {
          if(diffY < 40 && diffY > -10)
          {
            setTimeout(() => { charImg.src = player[7];charImg.style.width = "80px"; monster.x+=300;}, 800);
            console.log("hit the Monster");
            monster.health-=10;
          }
        }
        setTimeout(() => { charImg.src = player[7];charImg.style.width = "80px";}, 800);
        console.log(character);
        console.log(monster);
        console.log("dif x "+ diffX);
        console.log("dif y "+ diffY);
        
      }else if(character.currentImg === "left" || character.currentImg === "standLeft"){
        charImg.src = player[4];
        if(storage['characterId'] == 2)
        {
          charImg.style.width = 200 + "px";
        }
        var diffX = Math.floor(character.x - monster.x);
        var diffY = Math.floor(character.y - monster.y);
        if(diffX < 180 && diffX > 0)
        {
          if(diffY < 40 && diffY > -10)
          {
            setTimeout(() => { charImg.src = player[6];charImg.style.width = "80px";monster.x-=300; }, 800);    
            console.log("hit the Monster");
            monster.health-=10;
          }
        }
        setTimeout(() => { charImg.src = player[6];charImg.style.width = "80px";}, 800);    
        console.log(character);
        console.log(monster);
        console.log("dif x "+ Math.floor(character.x - monster.x));
        console.log("dif y "+ Math.floor(character.y - monster.y));
        
      }
      
    }
    charImg.style.left = character.x + "px";
    charImg.style.top = character.y +"px";

    targetX = charImg.offsetLeft;
    targetY = charImg.offsetTop;
      
    
    });

document.addEventListener("keyup",function(e){
  changeImge("stop");
})
var count;
function changeImge(dir){
    if(dir === "right" && count !== 1)
    {
      charImg.src = player[3];
      charImg.style.width = "80px";
      character.currentImg = "right";
      count = 1;
    }else if(dir === "left" && count !==2){
      charImg.src = player[2];
      charImg.style.width = "80px";
      character.currentImg = "left";
      count = 2;
    }else if(dir === "top" && count !=3){
      if(character.id == 2)
      {
        console.log("go top");
        if(character.currentImg === "standRight" ){
          charImg.src = player[3];
          character.currentImg = "right";    
        }else if(character.currentImg = "standLeft"){
          charImg.src = player[2];
          character.currentImg = "left";
        }
      }else{
      charImg.src = player[0];
      charImg.style.width = "80px";
      character.currentImg = "top";
      }
      count = 3;
  }else if(dir === "down" && count !==4){
    if(character.id === 2)
      {
        console.log("go down");
        if(character.currentImg === "standRight" ){
          charImg.src = player[3];
          character.currentImg = "right";    
        }else if(character.currentImg = "standLeft"){
          charImg.src = player[2];
          character.currentImg = "left";
        }
      }else{
      charImg.src =player[1];
      charImg.style.width = "80px";
      character.currentImg = "down";
      }
      count=4;
  }
  if(dir === "stop" && count !== 5){
      console.log(character);
      nextToFood();
      
      if(count === 1 || count == 4)
      {
        charImg.src =player[7];
        charImg.style.width = "80px";
        character.currentImg = "standRight";
      }else if(count === 2 || count == 3){
        charImg.src = player[6];
        charImg.style.width = "80px";
        character.currentImg = "standLeft";
      }
      count = 5;
  }
}
function updateGameStatus()
{
  if(character.health>100)
  {
    character.health = 100;
  }
  charHP.style.width = character.health+"px";
  charHP.innerText = character.health;
  if(monster.health > 0)
  {
    monsterHP.style.width = (monster.health%100) + "px";
    if((monster.health%100) === 0)
    {
      monsterHP.style.width = 100 + "px";  
    }
  }else
  {
    monsterHP.style.width = 0 + "px";
  }
  monsterHP.innerText = monster.health;
  characterSpeed.innerText = character.speed;
  monsterSpeed.innerText = monster.speed;
}