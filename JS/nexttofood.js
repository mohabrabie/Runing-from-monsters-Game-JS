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

                flag=1;
                character.health+=foodListOnMap[i].num;
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
                
                postMessage([foodid,foodListOnMap,character.health,flag]) ;
             continue;
             
              
       }
      
    }

    }

}

