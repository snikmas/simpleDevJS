// variables:
let score = JSON.parse(localStorage.getItem('score')) ||
 {
  wins: 0,
  losses: 0,
  ties: 0,
};

reScore();

let computerMove;


// ================== auto ==================
let autoPlay = false;
let interVal;

function auto() {
  if (!autoPlay) {
    interVal = setInterval(() => {
      playGame(computerMoveFunc());
    }, 1000);
    autoPlay = true;
  }
  else {
    clearInterval(interVal);
    autoPlay = false;
  }
}
// ================== auto ==================


// ================ listens =================
document.querySelector('.rock').addEventListener(
  'click', () => {playGame('rock')
});
document.querySelector('.paper').addEventListener(
  'click', () => {playGame('paper')
});
document.querySelector('.scissors').addEventListener(
  'click', () => {playGame('scissors')
});


//keyboard 
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  }
  else if (event.key === 'p') {
    playGame('paper')
  } else {
    playGame('scissors')
  }
})

// ================ listens =================



// ================ output =================

document.querySelector('.score-wins').innerHTML = `Wins: ${score.wins}`;
document.querySelector('.score-losses').innerHTML = `Losses ${score.losses}`;
document.querySelector('.score-ties').innerHTML = `Ties: ${score.ties}`;
// ================ output =================



// ================ functions =================

function computerMoveFunc() {
  let randomNum = Math.random();
  return (randomNum <= 1/3 ? 'rock' : randomNum <= 2/3 ? 'paper' : 'scissors')
}



function playGame(playerMove) {

  computerMove = computerMoveFunc();
  if (playerMove == computerMove) {
    score.ties++;
  }
  else if (playerMove == 'rock') {
    computerMove == 'paper' ? score.losses++ : score.wins++;
  }
  else if (playerMove == 'paper') {
    computerMove == 'scissors' ? score.losses++ : score.wins++;
  }
  else { // case player = scissors
    computerMove == 'rock' ? score.losses++ : score.wins++;
  } 

  reScore(playerMove, computerMove);
}

function reScore(playerMove, computerMove) {

  if (!playerMove){
    playerMove = 'avatar';
    computerMove = 'avatar'
  }

  document.querySelector('.result').innerHTML = `<p>You: <img src='${playerMove}-emoji.png'> : <img src='${computerMove}-emoji.png'> Computer</p>`

  document.querySelector('.score-wins').innerHTML = `Wins: ${score.wins}`;
  document.querySelector('.score-losses').innerHTML = `Losses: ${score.losses}`;
  document.querySelector('.score-ties').innerHTML = `Ties: ${score.ties}`;


  localStorage.setItem('score', JSON.stringify(score));
}

function reset() {
  score.losses = 0;
  score.wins = 0;
  score.ties = 0;

  reScore();
}


