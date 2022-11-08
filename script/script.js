`use strict`
let guessBtnEl = document.getElementById("guess-btn");
let startBtnEl = document.getElementById("start-btn");
let inputEl = document.getElementById("input");
let messageEl = document.getElementById("message-container");
let chancesEl = document.getElementById("chances");
let scoreEl = document.getElementById("score");

// global variables: that change or need to be updated
let chances = 6;
let score = 0;
let secretNumber =Math.trunc(Math.random()*20)+1;

// functions
function init(){
    chancesEl.innerText = chances;
    scoreEl.innerText = score;
    let secretNumber =Math.trunc(Math.random()*20)+1;
}

// event listeners
guessBtnEl.addEventListener("click", ()=>{
    let guess = Math.round(inputEl.value);
    if(chances>1){
        if(!guess || guess<0){
            messageEl.style.color = "red";
            messageEl.innerText = "Enter a valid input";
        }else{
            if(guess===secretNumber){
                messageEl.style.color = "rgb(14, 229, 8)";
                messageEl.innerText = "Congrats! You Won";
                scoreEl.innerText = chances;
                inputEl.value = null;
            }
            else if(guess<secretNumber){
                messageEl.style.color = "red";
                messageEl.innerText = "Your guess is too low";
                chances--;
                chancesEl.innerText = chances;
                inputEl.value = null;
            }
            else if(guess>secretNumber){
                messageEl.style.color = "red";
                messageEl.innerText = "Your guess is too high";
                chances--;
                chancesEl.innerText = chances;
                inputEl.value = null;
            }
        }
    }else{
        messageEl.style.color = "red";
        messageEl.innerText = "You Lost the Game!";
        inputEl.value = null;
        chancesEl.innerText = 0;
    }
});

startBtnEl.addEventListener("click", ()=>{
    chancesEl.innerText = 7;
    scoreEl.innerText = 0;
    messageEl.innerText = "Click on guess to guess a number between 1 to 50";
    messageEl.style.color = "rgb(214, 227, 238";
    secretNumber =Math.trunc(Math.random()*20)+1;
})




// initial setup
init();










