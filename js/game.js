let storage = JSON.parse(localStorage.getItem('gameStorage'));
let character = document.getElementById("player");
let character1_positions = ["characters/character1/char1_right.gif","img/char1_down.gif","img/char1_standLeft.gif"];
let  character2_positions = ["characters/character2/tota.gif","img/toto.gif"]
let  character3_positions = ["characters/character3/sonic.gif"]
if(storage['characterId']==="character1" )
{
    player=character1_positions;
}
else if(storage['characterId']==="character2" )
{
    player=character2_positions;
}
else
{
   player=character3_positions;
}
character.src = player[0];


