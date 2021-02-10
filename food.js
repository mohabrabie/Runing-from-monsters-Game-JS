var monster;
function draw(){
    
    var tx = monster.targetX - monster.x,
        ty = monster.targetY - monster.y,
        dist = Math.sqrt(tx*tx+ty*ty);      

    
      monster.velX = (tx/dist)*monster.speed;
      monster.velY = (ty/dist)*monster.speed;
    
    if(dist > 10){
      monster.x += monster.velX;
      monster.y += monster.velY;
    }

    monster.img.style.left = monster.x + 'px';
    monster.img.style.top = monster.y + 'px';

    // green.style.left = targetX + 'px';
    // green.style.top = targetY + 'px';    
    
    setTimeout(function(){draw()},monster.perSec);  
}

onmessage = function(e) {
    console.log('Worker: Message received from main script');
    monster = JSON.parse(e.data);
    if (isNaN(monster)) {
      postMessage('Please write OBJ');
    } else {
      var workerResult = monster;
      console.log('Worker: Posting message back to main script');
      postMessage(JSON.parse(workerResult));
    }
  }