var timer; 
var timesec =0; // seconds
var timemin =0; // minutes

var foodtimeappear;
// // var createfoodtimer=10000;
var foodlvl;

function gameOver() {
  cancelInterval(timer);
}



function updateTimer() {
  timesec ++;
  document.getElementById("timesec").innerHTML=timesec;
  document.getElementById("timmin").innerHTML=timemin;
 
  if(timesec > 60)
  {
    timesec=0;
    ++timemin;

    
 
    // document.getElementById("timmin").innerHTML=timemin;
    // gameOver();
  }
  console.log(foodtimeappear);
     setfoodtime();
}
function start() 
{  
    timer = setInterval(updateTimer, 500);
    updateTimer();
  
}
function setfoodtime(){
    if(timemin == 0){
            foodtimeappear=10000;  
            foodlvl=5;
        }
        else if(timemin == 1 ){
            foodtimeappear=8000;
            foodlvl=4;
        }
        else if(timemin == 2){
            foodtimeappear=6000;
            foodlvl=3;
        }
        else if(timemin == 3 ){
            foodtimeappear=5000;
            foodlvl=2;
        }
        else{
            foodtimeappear=4000;
            foodlvl=1;
            }
}
