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
    secretNumber =Math.trunc(Math.random()*20)+1;
};


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
                messageEl.innerText = "Congratulations! You Won! 👏";
                messageEl.style.fontSize = "25px";
                inputEl.value = null;
                scoreEl.innerText = chances;    
            }
            else if(guess<secretNumber){
                messageEl.style.color = "red";
                messageEl.style.fontSize = "25px";
                messageEl.style.fontWeight = "600";
                messageEl.innerText = "Your guess is too low";
                inputEl.value = null;
                chances--;
                chancesEl.innerText = chances;
            }
            else if(guess>secretNumber){
                messageEl.style.color = "red";
                messageEl.style.fontSize = "25px";
                messageEl.style.fontWeight = "600";
                messageEl.innerText = "Your guess is too high";
                inputEl.value = null;
                chances--;
                chancesEl.innerText = chances;
            }
        }
    }else{
        messageEl.style.color = "red";
        messageEl.innerText = "You Lost the Game!";
        inputEl.value = null;
    }
});


startBtnEl.addEventListener("click", ()=>{
    chances = 6;
    chancesEl.innerText = 6;
    secretNumber = Math.trunc(Math.random()*20)+1;
    messageEl.innerText = "Guess a number between 1 to 20";
    messageEl.style.color = "rgb(214, 227, 238)";  
    scoreEl.innerText = 0;
});


init();

// initial setup











