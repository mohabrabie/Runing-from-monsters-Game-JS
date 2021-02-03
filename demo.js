// Arrow Symbol	Arrow Type	Alt Code
// ↑	Upwards Arrow	24
// ↓	Downwards Arrow	25
// →	Rightwards Arrow	26
// ←	Leftwards Arrow	27

var character = document.getElementsByTagName("img")[0];

var speed  = 10;
var goRigth = speed;
var goDown = speed;
token = "0";
document.addEventListener('keydown', function(e) {
    console.log(e.code);
      if(e.code === "ArrowRight"){
        changeImge("right");
        goRigth+=speed;
      }else if(e.code === "ArrowLeft"){
        changeImge("left");
        goRigth-=speed;
      }else if(e.code === "ArrowUp"){
        changeImge("top");
        goDown-=speed;
      }else if(e.code === "ArrowDown"){
        changeImge("down");
        goDown+=speed;
      }
      character.style.left = goRigth + "px";
      character.style.top = goDown +"px";
      if(goRigth === 1000)
      {
          goRigth -=5 ;
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
      }else if(dir === "top" && count !=3){
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
  var food = function (){
    var num = 1;
    var x = getRandomInt(1400);
    var y = getRandomInt(1000);
    var foo = document.getElementById("food");
    foo.src = `url("food/"${num}".jpg")`;
    foo.style.position = "relative";
    foo.style.left = x + "px";
    foo.style.bottom = y + "px";
    num++;

  }
  setInterval(food,5000);

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }