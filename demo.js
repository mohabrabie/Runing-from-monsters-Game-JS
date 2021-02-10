
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
      }else if(e.code === "Space" ){
        if(character.currentImg === "right" || character.currentImg === "standRight")
        {
          var diffX = Math.floor(monster.x - character.x);
          var diffY = Math.floor(monster.y - character.y);
          charImg.src = "gif/hitRight.gif";
          if(diffX < 180 && diffX > 0)
          {
            if(diffY < 40 && diffY > -10)
            {
              setTimeout(() => { charImg.src = "gif/standRight.gif"; monster.x+=300;}, 800);
              console.log("hit the Monster");
              monster.health-=10;
            }
          }
          setTimeout(() => { charImg.src = "gif/standRight.gif"}, 800);
          console.log(character);
          console.log(monster);
          console.log("dif x "+ diffX);
          console.log("dif y "+ diffY);
          
        }else if(character.currentImg === "left" || character.currentImg === "standLeft"){
          charImg.src = "gif/hitLeft.gif";
          var diffX = Math.floor(character.x - monster.x);
          var diffY = Math.floor(character.y - monster.y);
          if(diffX < 180 && diffX > 0)
          {
            if(diffY < 40 && diffY > -10)
            {
              setTimeout(() => { charImg.src = "gif/standLeft.gif";monster.x-=300; }, 800);    
              console.log("hit the Monster");
              monster.health-=10;
            }
          }
          setTimeout(() => { charImg.src = "gif/standLeft.gif";}, 800);    
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
        charImg.src = "gif/right.gif";
        character.currentImg = "right";
        count = 1;
      }else if(dir === "left" && count !==2){
        charImg.src = "gif/left.gif";
        character.currentImg = "left";
        count = 2;
      }else if(dir === "top" && count !=3){
        charImg.src = "gif/top.gif";
        character.currentImg = "top";
        count = 3;
    }else if(dir === "down" && count !==4){
        charImg.src = "gif/down.gif";
        character.currentImg = "down";
        count=4;
    }
    if(dir === "stop" && count !== 5){
        console.log(character);
        nextToFood();
        
        if(count === 1 || count == 4)
        {
          charImg.src = "gif/standRight.gif";
          character.currentImg = "standRight";
        }else if(count === 2 || count == 3){
          charImg.src = "gif/standLeft.gif";
          character.currentImg = "standLeft";
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
var monsterCount = 1;
function makeMonster(){
  monster.x = getRandomInt(character.x-300);
  monster.y = getRandomInt(character.y-300);
  var monsterImg = document.createElement("img");
  monsterImg.src = `monster/right.gif`;
  monsterImg.style.width = "60px";
  monsterImg.style.height = "60px";
  monsterImg.style.position = "absolute";
  monsterImg.style.left = monster.x + "px";
  monsterImg.style.top = monster.y + "px";
  monsterImg.id = monsterCount + "m";
  monster.id = monsterCount+"m";
  monster.img = monsterImg;
  targetX = charImg.offsetLeft;
  targetY = charImg.offsetTop;
  body.appendChild(monsterImg);
  draw(monster);
}
makeMonster();
 
var MonsterToken=0;
var token=0;
function draw(monster){   
    var tx = targetX - monster.x,
        ty = targetY - monster.y,
        dist = Math.sqrt(tx*tx+ty*ty);           
      
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
    nextToMonster()
    setTimeout(function(){draw(monster)},monster.perSec);   
}
function nextToMonster(){
  var diffX = character.x - monster.x;
  var diffY = character.y - monster.y;
  if(diffX >= 0 && diffX <=20 || diffX >= -20 && diffX <= 0)
  {
      if((diffY >= 0 && diffY <=20 || diffY >= -20 && diffY <= 0) && MonsterToken !=1)
      {
        MonsterToken=1;
        console.log("take Dmg");
        character.x+=20;
        character.health-=monster.dmg;
        if(character.x >= 700)
        {
          character.x-=40;
        }
        //setTimeout(() => { console.log("DMG!"); }, 2000);
      }else{
        MonsterToken = 0;
      }
  }
}
function takeDmg(dmg){
  //console.log("DMG by "+monster.dmg);
}
