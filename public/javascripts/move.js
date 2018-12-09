function Move(player, piecenumber, length){
  this.player = player;
  this.piecenumber = piecenumber;
  this.length = length;
  this.oldpos = player.positions[piecenumber];
  this.newpos = oldpos - length;
}

Move.execute = function(){
  player.positions[this.piecenumber] = this.newpos;
  if (player.areWhite){
    board.whitepostions[this.piecenumber] = this.newpos;
  }
  else{
    board.blackpostions[this.piecenumber] += this.length;
  }
}
