let audiobkSource = document.querySelector("#audio-Background");
let audioeventSource = document.querySelector("#audio-Event");


var timer; 
var timesec =0; // seconds
var timemin =0; // minutes
var song ;

var foodtimeappear;
// // var createfoodtimer=10000;
var foodlvl;



function gameOver() {
  song = songsList[keys[2]];
  // audioSource.src = song;
  // audioSource.play();
  clearInterval(timer);
}



function updateTimer() {
  timesec ++;
  document.getElementById("timesec").innerHTML=timesec;
  document.getElementById("timmin").innerHTML=timemin;
 
  if(timesec > 60)
  {
    timesec=0;
    ++timemin;
    // gameOver();
  }

//   console.log(foodtimeappear);
     setfoodtime();
}
function start() 
{  
    timer = setInterval(updateTimer, 1000);
    updateTimer();

    playaudio(0);
  
}
flag=0;
function setfoodtime(){
    if(timemin == 0){
            foodtimeappear=10000;  
            foodlvl=5;
            document.getElementById("mainbody").classList.add('bkglvl1');
           

        }
        else if(timemin == 1 ){
          flag=1;
            foodtimeappear=8000;
            foodlvl=4;
            document.getElementById("mainbody").classList.remove('bkglvl1');
            document.getElementById("mainbody").classList.add('bkglvl2');

            
            
            // if ( document.getElementById("mainbody").classList.contains('bkglvl1') )
            //     {
            //         document.getElementById("mainbody").classList.toggle('bkglvl2');

            //     }
        }
        else if(timemin == 4){
            flag=2;
            foodtimeappear=6000;
            foodlvl=3;
        }
        else if(timemin == 6 ){
            flag=3;
            foodtimeappear=5000;
            foodlvl=2;
        }
        else{
          flag=4;
            foodtimeappear=4000;
            foodlvl=1;
        }
}


function checktimenw(){
  if(flag==1)
  {
    playaudio(1);
  }
  else if(flag==2){
    playaudio(0);
  }
  else if(flag==3){
    playaudio(1);
  }
  else {
    playaudio(0);
  }

}

function playaudio(thenum){
  // audioSource.pause();
  song = songsList[keys[thenum]];
  console.log(song);
  audiobkSource.src = song;
  audiobkSource.load();
  audiobkSource.play();
}


function playeventaudio(theeventnum){
  // audioSource.pause();
  song = songsList[keys[theeventnum]];
  console.log(song);
  audioeventSource.src = song;
  audioeventSource.load();
  audioeventSource.play();
}
// to change the sound every level
// time here change every 30 sec 1 min so i use 32000 not 60000 
setInterval(checktimenw, 32000);