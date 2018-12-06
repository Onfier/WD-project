var player1 = new player();
var player2 = new player();

function onTurn(bool){
  if (player1.onTurn == bool){return player1}
  if (player2.onTurn == bool){return player2}
}

function diceroll(){
  var rolls = [];
  rolls[0] = Math.floor(Math.random * 6 + 1);
  rolls[1] = Math.floor(Math.random * 6 + 1);
  return rolls;
}

function checkmoves(onTurn(true).positions, dice){
  second = onTurn(false);
  moves = [];
  for(p in positions){
    for(d in dice){
      var move = p - d;
      var count = 0;
      for(i in second.pieces){
        if(i.position == move){
          count++;
        }
      }
      if (count < 2){
        moves.push([p, d]);
      }
    }
  }
  return moves;
}
