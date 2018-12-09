function board(){
  this.whitepostions = [24, 24, 13, 13, 13, 13, 13, 8, 8, 8, 6, 6, 6, 6, 6];
  this.blackpostions = [1, 1, 12, 12, 12, 12, 12, 17, 17, 17, 19, 19, 19, 19, 19];
}

board.updatePositions = function(){
  this.whitepostions = player1.positions;
  this.blackpostions = [];
  for (i in player2.positions){
    temp.push(25 - i);
  }
}
