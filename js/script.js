



let computerWins = 0;
let playerWins = 0;
//game();






//Start of the game
function game()
{
  //How many rounds player wants to play?
  let rounds = +(prompt("How many rounds do you want to play?"));
  
  //Play assigned amount of rounds
  for (let i = 0; i < rounds; i++) {
    //Start of the round
    playRound();
  }
//End of the game
}


function playRound()
{
  //Computer make its turn
  let computerTurn = computerPlay();
  //Player make his turn
  let playerTurn = playerPlay();
  //Decide winner of the round
  decideRoundWinner(computerTurn, playerTurn);
}

function computerPlay()
{
  //Computer make arbitrary turn
  let computerTurn = Math.floor(Math.random()*3) + 1;
  switch (computerTurn)
  {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}