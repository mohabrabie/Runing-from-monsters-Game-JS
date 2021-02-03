
var body = document.getElementsByTagName("body")[0];
var char = document.getElementsByTagName("img")[0];

var speed  = 10;
var goRigth = speed;
var goDown = speed;
token = "0";
var food = {
  num : 1,
  x : 0,
  y : 0,
  id:0,
}
var character = {
  x:0,
  y:0,
  speed:10,
  health:100,
}
var monster = {
  id:0,
  x:0,
  y:0,
  speed:5,
  health:80,
}
var foodListOnMap = [];

document.addEventListener('keydown', function(e) {
      if(e.code === "ArrowRight"){
        changeImge("right");
        character.x += character.speed;
      }else if(e.code === "ArrowLeft"){
        changeImge("left");
        character.x -= character.speed;
      }else if(e.code === "ArrowUp"){
        changeImge("top");
        character.y -= character.speed;
      }else if(e.code === "ArrowDown"){
        changeImge("down");
        character.y += character.speed;
      }
     char.style.left = character.x + "px";
     char.style.top = character.y +"px";
      if(character.x >= 1300)
      {
          character.x -=5 ;
      }
      if(character.y >= 1000)
      {
        character.y -=5;
      }
  });
  document.addEventListener("keyup",function(e){
    changeImge("stop");
  })
var count;
  function changeImge(dir){

      if(dir === "right" && count !== 1)
      {
       char.src = "gif/right.gif";
        count = 1;
      }else if(dir === "left" && count !==2){
       char.src = "gif/left.gif";
        count = 2;
      }else if(dir === "top" && count !=3){
       char.src = "gif/top.gif";
        count = 3;
    }else if(dir === "down" && count !==4){
       char.src = "gif/down.gif";
        count=4;
    }
    monsterMove();
    if(dir === "stop" && count !== 5){
        console.log(character);
        nextToFood();
        
        if(count === 1 || count == 4)
        {
           char.src = "gif/standRight.gif";
        }else if(count === 2 || count == 3){
           char.src = "gif/standLeft.gif";
        }
        count = 5;
    }
  }
  var foodNum = 1;
  var foodCounter = 1;
  var makeFood = function (){
    var foodX = getRandomInt(1000);
    var foodY = getRandomInt(1000);
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

//var myWorker = new Worker("food.js");
function nextToFood(){
      for(let i=0;i<foodListOnMap.length;i++)
      {
        var foodX = foodListOnMap[i].x;
        var foodY = foodListOnMap[i].y;
        var charX = character.x;
        var charY = character.y;
        var diffX = charX - foodX;
        var diffY = charY - foodY;
        if((charX===foodX && foodY===charY))
        {
          break;
        }else if(diffX >= 0 && diffX <=70 || diffX >= -70 && diffX <= 0)
        {
            if(diffY >= 0 && diffY <=70 || diffY >= -70 && diffY <= 0)
            {
              var id = foodListOnMap[i].id
              console.log("eat <<< "+foodListOnMap[i].id*3);
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
var monsterCount = 1;
var MonsterList = [];
function makeMonster(){
  var monsterX = getRandomInt(character.x-100);
  var monsterY = getRandomInt(character.y-100);
  var monsterImg = document.createElement("img");
  monsterImg.src = `gif/1.jpg`;
  monsterImg.style.width = "40px";
  monsterImg.style.height = "40px";
  monsterImg.style.position = "absolute";
  monsterImg.style.left = monsterX + "px";
  monsterImg.style.top = monsterY + "px";
  monsterImg.id = 
  monster.id = monsterCount;
  monster.x = monsterx;
  monster.y = monsterY;
  monsterCount++;
  MonsterList.push(monster);
  body.appendChild(monsterImg);
}
function monsterMove(){
  for(let i=0;i<MonsterList.length;i++)
  {
    if(MonsterList[i].x < character.x)
    {
      document.getElementById(MonsterList[i].id).style.left = (monster.x+monster.speed)+"px";
    }else if(MonsterList[i].x > character.x)
    {
      document.getElementById(MonsterList[i].id).style.left = (monster.x-monster.speed)+"px";
    }
  }
}