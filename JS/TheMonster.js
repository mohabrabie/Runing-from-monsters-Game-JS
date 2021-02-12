
var monsterCount = 1;
function makeMonster(){
  monster.x = getRandomInt(character.x-300);
  monster.y = getRandomInt(character.y-300);
  var monsterImg = document.createElement("img");
  monsterImg.src = `images/monster/right.gif`;
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
      img.src = `images/monster/right.gif`;
      token = 1;
    }else if(character.x < monster.x&& token!=2){
      img.src = `images/monster/left.gif`;
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