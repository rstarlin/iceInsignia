var Fighter = function(){
  this.attack = 60;
  this.defense = 25;
  this.hp = 100;
  this.range = 1;
  this.hasAttacked = false;
  this.items = new Array(3);
  this.moveCounter = 0;
}

Fighter.prototype = {
  constructor: Fighter,


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
