// // var gameStorage;
// window.onload= (event) => {
 
// //    window.localStorage.gameStorage={"characterId":charcter1};

   
// };
// var gameStorage=window.localStorage.gameStorage;
// console.log("hello",gameStorage);


// let storage=JSON.parse(localStorage.getItem('gameStorage'));

// let storage=window.localStorage.myitems;
let character_1=document.getElementById('character1');
let character_2=document.getElementById('character2');
// let character_3=document.getElementById('character3');

function  character1_clicked(){

    myObj = { characterId: "1"};
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("CharID", myJSON);

    // console.log(storage);
    // storage['characterId']='character1';
    // localStorage.setItem('gameStorage', JSON.stringify(storage));
}
function  character2_clicked(){
    // storage['characterId']='character2';
    // localStorage.setItem('gameStorage', JSON.stringify(storage));
    myObj = { characterId: "2"};
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("CharID", myJSON);
}
// function character3_clicked(){
//     storage['characterId']='character3';
//     localStorage.setItem('gameStorage', JSON.stringify(storage));
// }
character_1.addEventListener('click',  character1_clicked);
character_2.addEventListener('click', character2_clicked);
// character_3.addEventListener('click',  character3_clicked);


