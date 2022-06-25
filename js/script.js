





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
    //Computer make its turn
    //Player make his turn
    //Decide winner of the round
    //Start next round until the last round
//End of the game
}


function playRound()
{
  console.log("round");
}
