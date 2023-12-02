var character=document.getElementById("character");
var block=document.getElementById("block");
var span=document.getElementById("score");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("aminate"); 
    }
    setTimeout(function(){
        character.classList.remove ("aminate"); 
    },500)
}
var checkDead=setInterval(function()  {
  var characterTop=  parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockleft=  parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  if(blockleft<20 && blockleft>0 && characterTop>=130){
     block.style.amination="none"
     block.style.amination="none"
     alert("You Lose. " +score+"m");
     location.reload();
  }
},10);

var Score=document.getElementById("displayScore");
 var score=0;
 function showScore(){
    score++;
    displayScore.innerText="Score:"+ score + "m";
}

setInterval(showScore, 100);