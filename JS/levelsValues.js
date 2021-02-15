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
  playaudio(4);
  clearInterval(timer);
}


function youlose() {
  playaudio(8);
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


var monster_level=document.getElementById("monsterlvl");
flag=0;
function setfoodtime(){
    if(timemin == 0){
            monster_level.innerHTML="1";
            foodtimeappear=10000;  
            foodlvl=5;
            document.getElementById("mainbody").classList.add('gameBkg1');
            document.getElementById("gameBorder").classList.add('gameborderBkg1');
            

        }
        else if(timemin == 1 ){
          monster_level.innerHTML="2";
            flag=1;
            foodtimeappear=8000;
            foodlvl=4;
            document.getElementById("mainbody").classList.remove('gameBkg1');
            document.getElementById("mainbody").classList.add('gameBkg2');

            document.getElementById("gameBorder").classList.remove('gameborderBkg1');
            document.getElementById("gameBorder").classList.add('gameborderBkg2');  
            // if ( document.getElementById("mainbody").classList.contains('bkglvl1') )
            //     {
            //         document.getElementById("mainbody").classList.toggle('bkglvl2');

            //     }
        }
        else if(timemin == 2){
          monster_level.innerHTML="3";
            flag=2;
            foodtimeappear=6000;
            foodlvl=3;


            document.getElementById("mainbody").classList.remove('gameBkg2');
            document.getElementById("mainbody").classList.add('gameBkg3');

            document.getElementById("gameBorder").classList.remove('gameborderBkg2');
            document.getElementById("gameBorder").classList.add('gameborderBkg3');
        }
        else if(timemin == 3 ){
          monster_level.innerHTML="4";
            flag=3;
            foodtimeappear=5000;
            foodlvl=2;

            document.getElementById("mainbody").classList.remove('gameBkg3');
            document.getElementById("mainbody").classList.add('gameBkg4');

            document.getElementById("gameBorder").classList.remove('gameborderBkg3');
            document.getElementById("gameBorder").classList.add('gameborderBkg4');
        }
        else{
          monster_level.innerHTML="5";
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
// time here change every 30 sec 1 min sos i use 32000 not 60000 
setInterval(checktimenw, 32000);