// Arrow Symbol	Arrow Type	Alt Code
// ↑	Upwards Arrow	24
// ↓	Downwards Arrow	25
// →	Rightwards Arrow	26
// ←	Leftwards Arrow	27

var x = 300,
      y = 0,
      
      velX = 0,
      velY = 0,
      thrust = 4;
  
  var blue = document.getElementById("blue");

  // green.style.left = targetX;
  // green.style.top = targetY;

  blue.style.left = x;
  blue.style.top = y;


var character = document.getElementsByTagName("img")[0];

targetX = character.offsetLeft
targetY = character.offsetTop

var speed  = 10;
var goRight = speed;
var goDown = speed;

document.addEventListener('keydown', function(e) {
    console.log(e.code);
      if(e.code === "ArrowRight" && goRight < 1275){
        changeImge("right");
        goRight+=speed;
        
      }else if(e.code === "ArrowLeft" && goRight > -30){
        changeImge("left");
        goRight-=speed;
        console.log(goRight);
      }else if(e.code === "ArrowUp" && goDown > -30){
        changeImge("top");
        goDown-=speed;
      }else if(e.code === "ArrowDown" && goDown < 540){
        changeImge("down");
        goDown+=speed;        
      }
      character.style.left = goRight + "px";
      character.style.top = goDown +"px";

      targetX = character.offsetLeft
      targetY = character.offsetTop

      
      if(goRight === 1000)
      {
          goRight -=5 ;
      }
  });
  document.addEventListener("keyup",function(e){
    changeImge("stop");
  })
var count;
  function changeImge(dir){

      if(dir === "right" && count !== 1)
      {
        character.src = "gif/right.gif";
        count = 1;
      }else if(dir === "left" && count !==2){
        character.src = "gif/left.gif";
        count = 2;
      }else if(dir === "top" && count !==3){
        character.src = "gif/top.gif";
        count = 3;
    }else if(dir === "down" && count !==4){
        character.src = "gif/down.gif";
        count=4;
    }
    if(dir === "stop" && count !== 5){
        
        if(count === 1 || count == 4)
        {
            character.src = "gif/standRight.gif";
        }else if(count === 2 || count == 3){
            character.src = "gif/standLeft.gif";
        }
        count = 5;
    }
          

  }

  

  function draw(){   
    var tx = targetX - x,
        ty = targetY - y,
        dist = Math.sqrt(tx*tx+ty*ty),        

    
      velX = (tx/dist)*thrust;
      velY = (ty/dist)*thrust;
    
    if(dist > 10){
      x += velX;
      y += velY;
    }

    blue.style.left = x + 'px';
    blue.style.top = y + 'px';

    // green.style.left = targetX + 'px';
    // green.style.top = targetY + 'px';    
    
    setTimeout(function(){draw()}, 30);   
}

draw();



















  // var food = function (){
  //   var num = 1;
  //   var x = getRandomInt(1400);
  //   var y = getRandomInt(1000);
  //   var foo = document.getElementById("food");
  //   foo.src = `url("food/"${num}".jpg")`;
  //   foo.style.position = "relative";
  //   foo.style.left = x + "px";
  //   foo.style.bottom = y + "px";
  //   num++;

  // }
  // setInterval(food,5000);

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * Math.floor(max));
  // }