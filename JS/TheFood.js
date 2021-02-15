

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
    foodWorker.postMessage([foodListOnMap,character]);
    foodWorker.onmessage= function(event){  
      foodid=event.data[0];
      theflag=event.data[3];
      if(theflag==1){
        playeventaudio(2);
      } 
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