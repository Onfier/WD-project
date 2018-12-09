function player(areWhite){
  this.areWhite = areWhite;
  this.positions = [24, 24, 13, 13, 13, 13, 13, 8, 8, 8, 6, 6, 6, 6, 6];
  this.checkersOnBar = 0;
  this.checkersBearedOff = 0;
}

player.canBearOff = function(){
  for (i in this.positions){
    if (i > 6){
      return false;
    }
  }
  return true;
}
