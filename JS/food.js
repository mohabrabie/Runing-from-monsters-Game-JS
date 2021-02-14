
onmessage = function(e) {
    // console.log(e.data);
    var food=e.data[0];
    var foodNum=e.data[1];
    var foodCounter=e.data[2];

    var foodX = getRandomInt(10,1190);
    var foodY = getRandomInt(140,400);
    food.num=foodNum;
    food.x = foodX;
    food.y = foodY;
    food.idfood = foodCounter;
    foodNum++;
    foodCounter++;
    if(foodNum === 10)
    {
        foodNum = 1;
        clearInterval(food);
    }
     function getRandomInt(min,max) {
        return Math.floor(Math.random(min) * Math.floor(max));
    }
    postMessage([food,foodNum,foodCounter]);  
}


// //make food










// 



// var food = {
//     num : 1,
//     x : 0,
//     y : 0,
//     id:0,
//     }

// var foodNum = 1;
// var foodCounter = 1;
// var makeFood = function (){
//     var foodX = getRandomInt(1000);
//     var foodY = getRandomInt(1000);
//     food.num=foodNum;
//     food.x = foodX;
//     food.y = foodY;
//     food.id = foodCounter;
//   var foo = document.createElement("img");
//     foo.src = `food/${foodNum}.jpg`;
//     foo.style.width = "40px";
//     foo.style.height = "40px";
//     foo.style.position = "absolute";
//     foo.style.left = foodX + "px";
//     foo.style.top = foodY + "px";
//     foo.id = foodCounter;
//     foodNum++;
//     foodCounter++;
//     if(foodNum === 8)
//     {
//     foodNum = 1;
//     clearInterval(food);
//     }
//     foodListOnMap.push(food);
//     body.appendChild(foo);
// }
// setInterval(makeFood,10000);
// function getRandomInt(max) {
//     return Math.floor(Math.random(0) * Math.floor(max));
//     }




