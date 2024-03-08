let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){

    submit.addEventListener('click',function(e){
        e.preventDefault();
        //console.log(randomNumber)
        numGuess++;
        //console.log(numGuess);
        const guess = parseInt(userInput.value);
        //console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid Number');
    }else if(guess<1){
        alert('Please enter valid Number');
    }else if(guess>100){
        alert('Please enter valid Number');
    }else{
        prevGuess.push(guess);
        
        if(numGuess==11){
            displayGuess(guess);
            displayMessage(`Game Over! Random Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess==randomNumber){
        displayMessage(`You guessed it right!`);
        endGame();
    }else if(guess<randomNumber){
        displayMessage(`Number is too low`);
    }else if(guess>randomNumber){
        displayMessage(`Number is too high`);
    }
}
function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML +=`${guess}   `;
   
    remaining.innerHTML = `${11-numGuess}`;
}
function displayMessage(message){
    lowOrHigh.innerHTML =`<h3>${message}</h3>`;
}
function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    submit.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
       const newGameButton = document.querySelector('#newGame');
       newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled','');
        submit.removeAttribute('disabled','');
        startOver.removeChild(p);
        displayMessage('');
        playGame=true;
       });
}
