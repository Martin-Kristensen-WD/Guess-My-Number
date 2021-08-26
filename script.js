'use strict';

// Secret number 
let secretNumber = Math.trunc(Math.random() * 20) +1

// Score 
let score = 20

// Highscore
let highscore = 0

// Display functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

const displayScore = function (score) {
  document.querySelector('.score').textContent = score
}

const changeMessageColor = function (color) {
  document.querySelector('.message').style.color = color
}

// Game Logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  // If the player dont type valid number
  if(!guess) {
    displayMessage('Not a number!')
  
  // When the player guess right
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!')
    document.querySelector('.number').textContent = secretNumber

    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('.btn').style.backgroundColor = 'green'
    document.querySelector('.again').style.backgroundColor = 'green'
    changeMessageColor('yellow')

    if(score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
    
  // When the player guess wrong
  } else if (guess !== secretNumber) {
    if(score > 1) {
      displayMessage(guess > secretNumber ? 
      'Number too high! 👆🏻' : 'Number too low 👇🏻')
      displayScore(score)
      score--
      changeMessageColor('red')

    } else {
      displayMessage('You lost the game! 😞')
      displayScore(0)
    }
  }
})

// Reset the game 
document.querySelector('.again').addEventListener('click', function() {
  score = 20
  secretNumber = Math.trunc(Math.random() *20) +1
  displayMessage('Start guessing...')
  displayScore(score)
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('.btn').style.backgroundColor = '#222'
  document.querySelector('.again').style.backgroundColor = '#222'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
  changeMessageColor('#fff')
})