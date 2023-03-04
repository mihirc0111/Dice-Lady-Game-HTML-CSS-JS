function startRoll(){

var randomNumber1=Math.floor(Math.random()*6) +1;
var randomImage1address="images/dice"+randomNumber1+".png";
var randomImage1Select=document.getElementById("player1").setAttribute("src",randomImage1address);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2address="images/dice"+randomNumber2+".png";
var randomImage2Select=document.getElementById("player2").setAttribute("src",randomImage2address);

var randomNumber3=Math.floor(Math.random()*3)+1;
var randomImage3address="images/game"+randomNumber3+".jpg";
var randomImage3Select=document.getElementById("player3").setAttribute("src",randomImage3address);

var randomNumber4=Math.floor(Math.random()*3)+1;
var randomImage4address="images/game"+randomNumber4+".jpg";
var randomImage4Select=document.getElementById("player4").setAttribute("src",randomImage4address);


if(randomNumber1>randomNumber2){
    var randomTitle=document.querySelector("h1").innerHTML="Player 1 Wins 🎉";
}
else if(randomNumber1<randomNumber2){
    var randomTitle=document.querySelectorAll("h1")[0].innerHTML="Player 2 Wins 🎉";
}
else{
    var randomTitle=document.querySelector("h1").innerHTML="Draw !";
}
// ###########################################################################################################################
// lady--1;  tiger--2;  hunter --3


if(randomNumber3==1 && randomNumber4==2 ){
    var randomTitle2=document.querySelector("#h3").innerHTML="Player 2 Wins 🎉";
}
else if(randomNumber3==1 && randomNumber4==3){
    var randomTitle2=document.querySelectorAll("#h3")[0].innerHTML="Player 1 Wins 🎉";
}
else if(randomNumber3==2 && randomNumber4==1){
    var randomTitle2=document.querySelectorAll("#h3")[0].innerHTML="Player 1 Wins 🎉";
}
else if(randomNumber3==2 && randomNumber4==3){
    var randomTitle2=document.querySelectorAll("#h3")[0].innerHTML="Player 2 Wins 🎉";
}
else if(randomNumber3==3 && randomNumber4==1){
    var randomTitle2=document.querySelectorAll("#h3")[0].innerHTML="Player 2 Wins 🎉";
}
else if(randomNumber3==3 && randomNumber4==2){
    var randomTitle2=document.querySelectorAll("#h3")[0].innerHTML="Player 1 Wins 🎉";
}
else{
    var randomTitle2=document.querySelectorAll("#h3")[0].innerHTML="Draw !";
}

}
document.querySelector('button[type="button"]').onclick = function() {startRoll()};



