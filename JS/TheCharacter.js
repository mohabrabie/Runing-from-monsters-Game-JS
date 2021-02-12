document.addEventListener('keydown', function(e) {
    if(e.code === "ArrowRight" && character.x < 1280){
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
        charImg.src = "images/gif/hitRight.gif";
        if(diffX < 180 && diffX > 0)
        {
          if(diffY < 40 && diffY > -10)
          {
            setTimeout(() => { charImg.src = "images/gif/standRight.gif"; monster.x+=300;}, 800);
            console.log("hit the Monster");
            monster.health-=10;
          }
        }
        setTimeout(() => { charImg.src = "images/gif/standRight.gif"}, 800);
        console.log(character);
        console.log(monster);
        console.log("dif x "+ diffX);
        console.log("dif y "+ diffY);
        
      }else if(character.currentImg === "left" || character.currentImg === "standLeft"){
        charImg.src = "images/gif/hitLeft.gif";
        var diffX = Math.floor(character.x - monster.x);
        var diffY = Math.floor(character.y - monster.y);
        if(diffX < 180 && diffX > 0)
        {
          if(diffY < 40 && diffY > -10)
          {
            setTimeout(() => { charImg.src = "images/gif/standLeft.gif";monster.x-=300; }, 800);    
            console.log("hit the Monster");
            monster.health-=10;
          }
        }
        setTimeout(() => { charImg.src = "images/gif/standLeft.gif";}, 800);    
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
      charImg.src = "images/gif/right.gif";
      character.currentImg = "right";
      count = 1;
    }else if(dir === "left" && count !==2){
      charImg.src = "images/gif/left.gif";
      character.currentImg = "left";
      count = 2;
    }else if(dir === "top" && count !=3){
      charImg.src = "images/gif/top.gif";
      character.currentImg = "top";
      count = 3;
  }else if(dir === "down" && count !==4){
      charImg.src = "images/gif/down.gif";
      character.currentImg = "down";
      count=4;
  }
  if(dir === "stop" && count !== 5){
      console.log(character);
      nextToFood();
      
      if(count === 1 || count == 4)
      {
        charImg.src = "images/gif/standRight.gif";
        character.currentImg = "standRight";
      }else if(count === 2 || count == 3){
        charImg.src = "images/gif/standLeft.gif";
        character.currentImg = "standLeft";
      }
      count = 5;
  }
}
