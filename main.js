'use strict'


const scorePlayer1 = document.getElementsByClassName("scorePlayer1")[0].innerHTML;
const scorePlayer2 = document.getElementsByClassName("scorePlayer2")[0].innerHTML;
const btnPlay1 = document.getElementsByClassName("btnPlayer1")[0];
const btnPlay2 = document.getElementsByClassName("btnPlayer2")[0];
const btnRest = document.getElementsByClassName("btnRest")[0];

let score1=0;
let score2=0;
let maxScore=5;

function scoreIncrement1(){
    if (score1 === maxScore){
        freeze();
        return;
    }else{
score1++;
document.getElementsByClassName('scorePlayer1')[0].innerHTML=score1;
}
}
console.log(score1);



function scoreIncrement2() {
    if (score2 === maxScore){
        freeze();
        return;
     } else{
score2++;
document.getElementsByClassName('scorePlayer2')[0].innerHTML=score2;

}
}
console.log(score2);



function freeze() {

    btnPlay1.disabled=true;
    btnPlay2.disabled=true;
    
}

function restScore() {
btnPlay1.disabled = false;
btnPlay2.disabled = false;
document.getElementsByClassName('scorePlayer1')[0].innerHTML= 0;
document.getElementsByClassName('scorePlayer2')[0].innerHTML= 0;

}




