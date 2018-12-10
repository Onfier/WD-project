function Move(player, piecenumber, length){
  this.player = player;
  this.piecenumber = piecenumber;
  this.length = length;
  this.oldpos = player.positions[piecenumber];
  this.newpos = oldpos - length;
  this.opponent = otherplayer(this.player);
  this.opponentpositions = [];
  for(i = 0; i < opponent.positions.length; i++){
    opponentpositions.push(25 - opponent.positions[i]);
  }
}

Move.execute = function(){
  if(Move.peg()){
    player.positions[piecenumber] = newpos;
    var i = opponentpositions.indexOf(newpos);
    opponent.positions[i] = 25;
    board.updatePositions();
  }
  else if (move.newpos < 1){
    player.positions[piecenumber] = 0;
    board.updatePositions;
  }
  else{
    player.positions[piecenumber] = newpos;
  }
}

Move.peg = function(){
  if(Move.valid() && this.opponentpositions.indexOf(newpos) > -1){
    return true;
  }
  else{
    return false;
  }
}

Move.valid = function(rolls){
    if(rolls.indexOf(length) == -1){
      return false;
    }
    if(player.positions[this.piecenumber] < 1){
      return false;
    }
    if(player.positions[this.piecenumber] != 25 && player.positions.indexOf(25) != -1){
      return false;
    }
    if(this.opponentpositions.indexOf(this.newpos) != this.opponentpositions.lastIndexOf(this.newpos)){
      return false;
    }
    return true;
}
