// var foodNum = 1;
// var foodCounter = 1;
// var makeFood = function (){
// var foodX = getRandomInt(1400);
// var foodY = getRandomInt(550);
// food.num=foodNum;
// food.x = foodX;
// food.y = foodY;
// food.id = foodCounter;
// var foo = document.createElement("img");
// foo.src = `images/food/${foodNum}.jpg`;
// foo.style.width = "40px";
// foo.style.height = "40px";
// foo.style.position = "absolute";
// foo.style.left = foodX + "px";
// foo.style.top = foodY + "px";
// foo.id = foodCounter;
// foodNum++;
// foodCounter++;
// if(foodNum === 8)
// {
//   foodNum = 1;
//   clearInterval(food);
// }
// foodListOnMap.push(food);
// body.appendChild(foo);
// }
// setInterval(makeFood,10000);

// function getRandomInt(max) {
// return Math.floor(Math.random(0) * Math.floor(max));
// }

// function nextToFood(){
//   for(let i=0;i<foodListOnMap.length;i++)
//   {
//     var foodX = foodListOnMap[i].x;
//     var foodY = foodListOnMap[i].y;
//     var charX = character.x;
//     var charY = character.y;
//     var diffX = charX - foodX;
//     var diffY = charY - foodY;
//     if(diffX >= 0 && diffX <=70 || diffX >= -70 && diffX <= 0)
//     {
//         if(diffY >= 0 && diffY <=70 || diffY >= -70 && diffY <= 0)
//         {
//           var id = foodListOnMap[i].id
//           console.log("eat <<< "+foodListOnMap[i].id*2);
//           character.health+=foodListOnMap[i].id*2;
//           document.getElementById(foodListOnMap[i].id).remove();
//           console.log(foodListOnMap);
//           foodListOnMap = foodListOnMap.filter((item)=>{
//             return (id != item.id);
//           });
//           console.log(foodListOnMap);
//           break;
          
//         }
//     }
// }
// }


var foodNum = 1;
var foodCounter = 0;
var myWorker ;

if(window.Worker){
  setInterval(() =>{
    myWorker = new Worker("JS/food.js");
    myWorker.postMessage([food,foodNum,foodCounter]);
    myWorker.onmessage= function(event){  
      food=event.data[0];
      foodNum=event.data[1];
      foodCounter=event.data[2];
      // console.log(event.data[0]);
      createfoodelement(foodNum,food,foodCounter);      
     }

  }
  ,12000); 
}
else{
  console.log("not worked");
}





function createfoodelement(foodNo,food,foodCount){
  var foodX=food.x;
  var foodY=food.y;
    var foo = document.createElement("img");
    foo.src = `images/food/${foodNo}.jpg`;
    foo.style.width = "50px";
    foo.style.height = "50px";
    foo.style.position = "absolute";
    foo.style.left = foodX + "px";
    foo.style.top = foodY + "px";
    foo.id = foodCount;
    foodListOnMap.push(food);
    body.appendChild(foo);
    // console.log("foodlistonmap",foodListOnMap);
   //food timer 
    setTimeout(() =>{
    foo.remove();
    foodListOnMap = foodListOnMap.filter((item)=>{
      return (food.idfood != item.idfood);
    });
    },foodtimeappear);

}
var foodWorker ;
var foodelement;
function nextToFood(){

  if(window.Worker){
 
    foodWorker = new Worker("JS/nexttofood.js");
    foodWorker.postMessage([foodListOnMap,character,foodlvl]);
    foodWorker.onmessage= function(event){  
      foodid=event.data[0]; 
      foodelement =  document.getElementById(foodid);
      if(foodelement != null && foodelement.remove()){
      
      }
    

    foodListOnMap=event.data[1];
    character.health=event.data[2];
     
      //foodelement = document.querySelector("#foodid"); 

     
     
      }
  }
  else{
    console.log("not worked");
  }

}