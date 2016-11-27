var Tank = function(){
  this.attack = 35;
  this.defense = 50;
  this.hp = 120;
  this.range = 1;
  this.hasAttacked = false;
  this.items = new Array(3);
  this.moveCounter = 0;
}

Tank.prototype = {
  constructor: Tank,


  attack:function(){
    this.hasAttacked = true;
  },
  defend:function(damage){
    this.hp = this.hp - damage;
  },
  isInRange:function(x, y){
    /*
      check to see if attack is in range
    */
  },
  canAttack:function(){
    return !this.hasAttacked;
  },
  useItem:function(item){
    /*
      check to see if item is in inventory,
      if so, use and remove from inventory
    */
  },
  move:function(){
    this.moveCounter++;
  },
  reset:function(){
    this.hasAttacked=false;
    this.moveCounter = 0;
  }

}
