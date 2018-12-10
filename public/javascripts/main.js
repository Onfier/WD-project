var board = new board();
var player1 = new player(true);
var player2 = new player(false);

//to be moved to server
function diceroll(){
  var rolls = [];
  rolls[0] = Math.floor(Math.random * 6 + 1);
  rolls[1] = Math.floor(Math.random * 6 + 1);
  return rolls;
}

function otherplayer(player){
  if (player.areWhite){
    return player2;
  }
  else{
    return player1;
  }
}

function playturn(player){
  var rolls = diceroll();
  var moves = rolls.length;
  for(i = 0; i < moves; i++){
    //ask for move from #UI
    if(move.valid(rolls)){
      move.execute();
    }
    else{
      //Retry on #UI
    }
  }
}
