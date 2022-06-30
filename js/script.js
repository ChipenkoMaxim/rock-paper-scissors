



let computerWins = 0;
let playerWins = 0;
let playerChoice;
//game();


const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
div.setAttribute('style', 'white-space: pre;');

buttons.forEach(button => button.addEventListener('click', playerPlay));
buttons.forEach(button => button.addEventListener('click', game));

//Start of the game
function game() {
  //How many rounds player wants to play?
  // let rounds = +(prompt("How many rounds do you want to play?"));
  // if (isNaN(rounds)|| rounds <= 0)
  // {
  //   console.log("Print correct number of rounds");
  //   return 1;
  // }
  let rounds = 1;
  //Play assigned amount of rounds
  for (let i = 0; i < rounds; i++) {
    //Start of the round
    playRound();
    printGameScore();
  }
  //End of the game
  printGameWinner();
}


function playRound() {
  //Computer make its turn
  let computerTurn = computerPlay();
  //Player make his turn
  let playerTurn = playerChoice;
  //let playerTurn = playerPlay();
  //Decide winner of the round
  decideRoundWinner(computerTurn, playerTurn);
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
  // let itsValidTurn = false;
  // let playerTurn;
  // while (!itsValidTurn) {
  //   playerTurn = prompt("Your Turn?").toLowerCase();
  //   itsValidTurn = checkPlayerTurn(playerTurn);
  // }
  // this.textContent
  playerChoice = this.textContent.toLowerCase();
  //return this.textContent.toLowerCase();
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
  //console.log(`${computerTurn} beats ${playerTurn}, computer wins this round`);
  div.textContent += `\n${computerTurn} beats ${playerTurn}, computer wins this round`;
  computerWins++;
}

function playerWin(computerTurn, playerTurn) {
  //console.log(`${playerTurn} beats ${computerTurn}, player wins this round`);
  div.textContent += `\n${playerTurn} beats ${computerTurn}, player wins this round`;
  playerWins++;
}

function tie() {
  div.textContent += `\nIt's tie!`;
  //console.log("It\'s tie!");
  computerWins++;
  playerWins++;
}

function printGameScore() {
  div.textContent += `\nComputer ${computerWins} : Player ${playerWins}`;
  //console.log(`Computer ${computerWins} : Player ${playerWins}`);
}

function printGameWinner() {
  if (computerWins > playerWins)
  {
    div.textContent += `\nComputer wins the game!`;
    //console.log("Computer wins the game!");
  }
  else if (playerWins > computerWins)
  {
    div.textContent += `\nPlayer wins the game!`;
    //console.log("Player wins the game!");
  }
  else if (computerWins == playerWins)
  {
    //div.textContent += `Nobody wins the game! It's tie`
    //console.log("Nobody wins the game! It's tie!");
  }
}