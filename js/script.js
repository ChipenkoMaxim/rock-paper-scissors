



let computerWins = 0;
let playerWins = 0;
const winsToWin = 5;
let playerChoice;


const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
div.setAttribute('style', 'white-space: pre;');


buttons.forEach(button => button.addEventListener('click', playerPlay));
buttons.forEach(button => button.addEventListener('click', playRound));


function resetScore() {
  computerWins = 0;
  playerWins = 0;
}

function clearResults() {
  div.textContent = ``;
}

function playRound() {
  //Computer make its turn
  clearResults();
  if (computerWins === winsToWin || playerWins === winsToWin) {
    resetScore();
  }
  let computerTurn = computerPlay();
  //Player make his turn
  let playerTurn = playerChoice;
  //Decide winner of the round
  decideRoundWinner(computerTurn, playerTurn);
  printGameScore();
  printGameWinner();
}

function computerPlay() {
  //Computer make arbitrary turn
  let computerTurn = Math.floor(Math.random() * 3) + 1;
  switch (computerTurn) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playerPlay(e) {
  playerChoice = this.textContent.toLowerCase();
}

function checkPlayerTurn(playerTurn) {
  if (playerTurn == 'rock' || playerTurn == 'paper' || playerTurn == 'scissors') {
    return true;
  }
  return false;
}

function decideRoundWinner(computerTurn, playerTurn) {
  if (computerTurn == 'rock' && playerTurn == 'scissors') {
    computerWin(computerTurn, playerTurn);
  }
  else if (computerTurn == 'paper' && playerTurn == 'rock') {
    computerWin(computerTurn, playerTurn);
  }
  else if (computerTurn == 'scissors' && playerTurn == 'paper') {
    computerWin(computerTurn, playerTurn);
  }
  else if (computerTurn == playerTurn) {
    tie();
  }
  else {
    playerWin(computerTurn, playerTurn);
  }
}

function computerWin(computerTurn, playerTurn) {
  div.textContent += `\n${computerTurn} beats ${playerTurn}, computer wins this round`;
  computerWins++;
}

function playerWin(computerTurn, playerTurn) {
  div.textContent += `\n${playerTurn} beats ${computerTurn}, player wins this round`;
  playerWins++;
}

function tie() {
  div.textContent += `\nIt's tie!`;
}

function printGameScore() {
  div.textContent += `\nComputer ${computerWins} : Player ${playerWins}`;
}

function printGameWinner() {
  if (computerWins === winsToWin || playerWins === winsToWin) {
    clearResults();
    if (computerWins > playerWins) {
      div.textContent += `\nComputer wins the game!`;
      printGameScore();
    }
    else if(playerWins > computerWins) {
      div.textContent += `\nPlayer wins the game!`;
      printGameScore();
    }
  }
}