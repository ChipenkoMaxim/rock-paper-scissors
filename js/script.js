




let computerWins = 0;
let playerWins = 0;
game();








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
