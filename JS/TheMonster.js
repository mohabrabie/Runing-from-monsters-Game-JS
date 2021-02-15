
var monsterCount = 1;
function makeMonster(){
  monster.x = getRandomInt(character.x-300);
  monster.y = getRandomInt(character.y-300);
  var monsterImg = document.createElement("img");
  monsterImg.src = `images/monster/right.gif`;
  monsterImg.style.width = "90px";
  monsterImg.style.height = "90px";
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
      if(timemin==0){
        img.src = `images/monster/right.gif`;
      }
      else if(timemin==1){
        img.src = `images/monster/right1.gif`;
        monster.speed=6;
        monster.dmg=7;
      }
      else if(timemin==2){
        img.src = `images/monster/right2.gif`;
        monster.speed=7;
        monster.dmg=8;
      }
      else if(timemin==3){
        img.src = `images/monster/right3.gif`;
        monster.speed=8;
        monster.dmg=9;
      }
      else{
        img.src = `images/monster/right4.gif`;
        monster.speed=9;
        monster.dmg=10;
      }
      
      token = 1;
    }else if(character.x < monster.x && token!=2){
     
      if(timemin == 0){
        img.src = `images/monster/left.gif`;
      }
      else if(timemin==1){
        monster.speed=6;
        monster.dmg=7;
        img.src = `images/monster/left1.gif`;
      }
      else if(timemin==2){
        monster.speed=7;
        monster.dmg=8;
        img.src = `images/monster/left2.gif`;
      }
      else if(timemin==3){
        monster.speed=8;
        monster.dmg=9;
        img.src = `images/monster/left3.gif`;
      }
      else{
        monster.speed=9;
        monster.dmg=10;
        img.src = `images/monster/left4.gif`;
      }
       
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

function getRandomInt(max) {
  return Math.floor(Math.random(0) * Math.floor(max));
}

// var img;
// function mosternow(monster){
//   console.log(helo);
//   img = document.getElementById(monster.id);
//   var positions = [
//       'images/monster/left.gif',
//       'images/monster/left.gif', 
 
//       ], i = 0;
//   setInterval(function(){
//       img.src=positions[i=(i+1)%positions.length]
//       }, 10000);

// };