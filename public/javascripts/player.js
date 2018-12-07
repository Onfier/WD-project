function player(){
  this.onTurn = false;
  this.pieces = [];
  for (i = 0; i < 2; i++){
    pieces.push(new piece(24));
  }
  for (i = 0; i < 5; i++){
    pieces.push(new piece(13));
  }
  for (i = 0; i < 3; i++){
    pieces.push(new piece(8));
  }
  for (i = 0; i < 5; i++){
    pieces.push(new piece(6));
  }
}

player.positions = function(){
  positions = [];
  for(p in this.pieces){
    if(postions.indexOf(p.position) == -1){
      positions.push(p.position);
    }
  }
}
