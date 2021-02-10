
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
}

var foodListOnMap = [];
  
document.addEventListener('keydown', function(e) {
      if(e.code === "ArrowRight" && character.x < 1400){
        changeImge("right");
        character.x += character.speed;
      }else if(e.code === "ArrowLeft" && character.x > 0){
        changeImge("left");
        character.x -= character.speed;
      }else if(e.code === "ArrowUp" && character.y > 0){
        changeImge("top");
        character.y -= character.speed;
      }else if(e.code === "ArrowDown" && character.y < 550){
        changeImge("down");
        character.y += character.speed;
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
        charImg.src = "gif/right.gif";
        count = 1;
      }else if(dir === "left" && count !==2){
        charImg.src = "gif/left.gif";
        count = 2;
      }else if(dir === "top" && count !=3){
        charImg.src = "gif/top.gif";
        count = 3;
    }else if(dir === "down" && count !==4){
        charImg.src = "gif/down.gif";
        count=4;
    }
    if(dir === "stop" && count !== 5){
        console.log(character);
        nextToFood();
        
        if(count === 1 || count == 4)
        {
          charImg.src = "gif/standRight.gif";
        }else if(count === 2 || count == 3){
          charImg.src = "gif/standLeft.gif";
        }
        count = 5;
    }
  }
    var foodNum = 1;
    var foodCounter = 1;
    var makeFood = function (){
    var foodX = getRandomInt(1400);
    var foodY = getRandomInt(550);
    food.num=foodNum;
    food.x = foodX;
    food.y = foodY;
    food.id = foodCounter;
    var foo = document.createElement("img");
    foo.src = `food/${foodNum}.jpg`;
    foo.style.width = "40px";
    foo.style.height = "40px";
    foo.style.position = "absolute";
    foo.style.left = foodX + "px";
    foo.style.top = foodY + "px";
    foo.id = foodCounter;
    foodNum++;
    foodCounter++;
    if(foodNum === 8)
    {
      foodNum = 1;
      clearInterval(food);
    }
    foodListOnMap.push(food);
    body.appendChild(foo);
  }
  setInterval(makeFood,10000);

function getRandomInt(max) {
  return Math.floor(Math.random(0) * Math.floor(max));
}

function nextToFood(){
      for(let i=0;i<foodListOnMap.length;i++)
      {
        var foodX = foodListOnMap[i].x;
        var foodY = foodListOnMap[i].y;
        var charX = character.x;
        var charY = character.y;
        var diffX = charX - foodX;
        var diffY = charY - foodY;
        if(diffX >= 0 && diffX <=70 || diffX >= -70 && diffX <= 0)
        {
            if(diffY >= 0 && diffY <=70 || diffY >= -70 && diffY <= 0)
            {
              var id = foodListOnMap[i].id
              console.log("eat <<< "+foodListOnMap[i].id*2);
              character.health+=foodListOnMap[i].id*2;
              document.getElementById(foodListOnMap[i].id).remove();
              console.log(foodListOnMap);
              foodListOnMap = foodListOnMap.filter((item)=>{
                return (id != item.id);
              });
              console.log(foodListOnMap);
              break;
              
            }
        }
    }
}
var monster = {
  id:0,
  x:300,
  y:0,
  speed:8,
  dmg:6,
  velX:0,
  velY:0,
  perSec:50,
  img:0,
}
var monsterCount = 1;
var MonsterList = [];
function makeMonster(){
  monster.x = getRandomInt(character.x-300);
  monster.y = getRandomInt(character.y-300);
  var monsterImg = document.createElement("img");
  monsterImg.src = `monster/right.gif`;
  monsterImg.style.width = "40px";
  monsterImg.style.height = "40px";
  monsterImg.style.position = "absolute";
  monsterImg.style.left = monster.x + "px";
  monsterImg.style.top = monster.y + "px";
  monsterImg.id = monsterCount + "m";
  monster.id = monsterCount+"m";
  monster.img = monsterImg;
  targetX = charImg.offsetLeft;
  targetY = charImg.offsetTop;
  monsterCount++;
  MonsterList.push(monster);
  body.appendChild(monsterImg);
  draw(monster);
}
//setInterval(makeMonster,4000);
makeMonster();
// blue.style.left = monster.x;
// blue.style.top = monster.y;
var token;
function draw(monster){   
    var tx = targetX - monster.x,
        ty = targetY - monster.y,
        dist = Math.sqrt(tx*tx+ty*ty);      
      console.log("draw monster move");
      
      monster.velX = (tx/dist)*monster.speed;
      monster.velY = (ty/dist)*monster.speed;
    
    if(dist > 10){
      monster.x += monster.velX;
      monster.y += monster.velY;
    }
    var img = document.getElementById(monster.id);
    
    if(character.x > monster.x && token!=1)
    {
      img.src = `monster/right.gif`;
      token = 1;
    }else if(character.x < monster.x&& token!=2){
      img.src = `monster/left.gif`;
      token =2;
    }
    
    img.style.left = monster.x + 'px';
    img.style.top = monster.y + 'px';
    
    setTimeout(function(){draw(monster)},monster.perSec);   
}
function drawAllMonsters(){
  for(let i=0;i<MonsterList.length;i++)
  {
    draw(MonsterList[i]);
  }
}
