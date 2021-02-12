var foodposX;
var foodposY;
var charX;
var charY;
var diffX ;
var diffY;
var element;
var foodid ;

onmessage = function(e) {
    foodListOnMap=e.data[0];
    character=e.data[1];
    foodlvl=e.data[2];
    for(let i=0;i<foodListOnMap.length;i++)
    {
      foodposX = foodListOnMap[i].x;
      foodposY = foodListOnMap[i].y;
      charX = character.x;
      charY = character.y;
      diffX = charX - foodposX;
      diffY = charY - foodposY;
         if(diffX <=50 && diffX >= -50)
          {
              if(diffY <=50 && diffY >= -50)
              {


                character.health+=foodListOnMap[i].num*foodlvl;
                foodid = ++foodListOnMap[i].idfood ;
                // foodListOnMap = foodListOnMap.filter((item)=>{
                //   return (foodid != item.idfood);
                // });
             
                for( var j = 0; j < foodListOnMap.length; j++){ 
                  if ( foodListOnMap[j].idfood == foodid) { 
                    
                    foodListOnMap.splice(j, 1); 
                      j--; 
                  }
                }
                

                //
                // ++character.health;

                // console.log("foodid",foodid);
                // console.log("list",foodListOnMap);
                // console.log("eat <<< "+foodListOnMap[i].id*3);
                
                postMessage([foodid,foodListOnMap,character.health]) ;
             continue;
             
              
       }
      
    }

    }

}


// function nextToFood(){
 

// for(let i=0;i<foodListOnMap.length;i++)
// {
//   foodposX = foodListOnMap[i].x;
//   foodposY = foodListOnMap[i].y;
//   charX = character.x;
//   charY = character.y;
//   diffX = charX - foodposX;
//   diffY = charY - foodposY;
//   // if((charX===foodX && foodY===charY))
//   // {
//   //   break;
//   // }else
//   //  if(diffX >= 0 && diffX <=70 || diffX >= -70 && diffX <= 0)
//   // {
//   //     if(diffY >= 0 && diffY <=70 || diffY >= -70 && diffY <= 0)
//   //     {
//     if(diffX <=10 && diffX >= -10)
//     {
//         if(diffY <=10 && diffY >= -10)
//         {
//           console.log(diffX,diffY);
//         //   foodid =++ foodListOnMap[i].id ;
       
      
//         // // console.log("foodid",foodid);
//         // // console.log("eat <<< "+foodListOnMap[i].id*3);
//         // character.health+=foodListOnMap[i].id*2;
//         // // console.log("foodlist",foodListOnMap[i].id);
//         // element = document.getElementById(foodid);
//         // element.style.display="none";
//         // // element.remove();
//         // // element.empty();
//         // // foodListOnMap = foodListOnMap.filter((item)=>{
//         // //   console.log("hne");
//         // //   return (foodid != item.id);
//         // // });
//         // // console.log("foodlistonmap",foodListOnMap);
//        break;
        
//       }
  
//   }
// }
// }