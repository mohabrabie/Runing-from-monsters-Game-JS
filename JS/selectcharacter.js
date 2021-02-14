let character_1=document.getElementById('character1');
let character_2=document.getElementById('character2');
let iamplay = document.getElementById('play');

function  character1_clicked(){
    myObj = { characterId: "1"};
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("CharID", myJSON);
    iamplay.textContent='player "1"'
}
function  character2_clicked(){
    myObj = { characterId: "2"};
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("CharID", myJSON);
    iamplay.textContent='player "2"'
}
character_1.addEventListener('click',  character1_clicked);
character_2.addEventListener('click', character2_clicked);
