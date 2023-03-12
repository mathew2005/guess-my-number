'use strict'
let checkBtn = document.querySelector('.check');
let guess = document.querySelector('.guess');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let scoreEl = document.querySelector('.score');
let again = document.querySelector('.again');
let highscoreEl = document.querySelector('.highscore')


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber)


function loser(){
  document.querySelector('body').style.backgroundColor = '#FF6645';
    message.textContent = 'You lost 💥🥲'
    number.style.width = '30rem';
number.textContent = secretNumber;
    
}



checkBtn.addEventListener('click',function(){
  if(score == 0) {
    loser();
    return
  }

  let guessNo = Number(guess.value); 

//when the guess is empty or isn't a number
if(guessNo == null || guessNo == ''){
  message.textContent = 'Make sure to put your guess before checking 🤡!'
}
else if(guessNo === secretNumber){
  //when the guess is the secret number
message.textContent = 'You won 🍾';
document.querySelector('body').style.backgroundColor = '#60b347';
number.style.width = '30rem';
number.textContent = secretNumber;
if(score > highscore){
  highscore = score;
  highscoreEl.textContent = highscore;
}

}else if(guessNo < 1 || guessNo > 20){
  message.textContent = 'Input Out of Range'
}
else if(guessNo > secretNumber){
  message.textContent = 'Too High 📈'
  score--;
  scoreEl.textContent = score;
  if(score == 0) loser();
  
}else if(guessNo < secretNumber){
  message.textContent = 'Too Low 📉'
  score--;
  scoreEl.textContent = score;

 if(score == 0) loser();
}



//when the guess is beyond the range of 1 and 20




})


again.addEventListener('click',function(){
secretNumber = Math.trunc(Math.random() * 20) + 1;
message.textContent = 'Start guessing ...';
score = 20;
scoreEl.textContent = score;
document.querySelector('body').style.backgroundColor = '#222';
guess.value = '';
number.textContent = '?';
number.style.width = '15rem';

})