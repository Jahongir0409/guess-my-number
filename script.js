'use strict';
let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}
let number = document.querySelector('.number') ;
let scoreSelected = document.querySelector('.score') ;
let guessSelected = document.querySelector('.guess') ;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(guessSelected.value);
    // when there is no input
    if(!guess) {
       displayMessage('No numberโ !');
        
        //  when player is winner
    }else if(guess === secretNumber) {
       displayMessage('Correct โ๐');
        number.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor ='#60b347';
        number.style.width ='30rem';
        
        if (score > highscore){
            score = highscore ;
            document.querySelector('.highscore').textContent = highscore ;
        }
        // when guess is wrong 
    } else if( guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'too high ๐น' : 'too low ใฝ');
            score--;
            scoreSelected.textContent = score;   
        }else {
           displayMessage('You lost โญ๐');
            score--;
            scoreSelected.textContent = 0; 
        } 
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    displayMessage('Start guessing...');
    scoreSelected.textContent = score;
    number.textContent = '?';
    guessSelected.textContent = '';
    document.querySelector('body').style.backgroundColor ='#222';
    number.style.width ='15rem';
})
