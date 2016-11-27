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

var Swordsman = function(){
  this.attack = 75
  this.defense = 10;
  this.hp = 100;
  this.range = 1;
  this.hasAttacked = false;
  this.items = new Array(3);
  this.moveCounter = 0;
}

Swordsman.prototype = {
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

var Knight = function(){
  this.attack = 45;
  this.defense = 30;
  this.hp = 100;
  this.range = 2;
  this.hasAttacked = false;
  this.items = new Array(3);
  this.moveCounter = 0;
}

Knight.prototype = {
  constructor: Knight,


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

var Archer = function(){
  this.attack = 45;
  this.defense = 10;
  this.hp = 70;
  this.range = 3;
  this.hasAttacked = false;
  this.items = new Array(3);
  this.moveCounter = 0;
}

Archer.prototype = {
  constructor: Archer,


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

var Druid = function(){
  this.attack = 55;
  this.defense = 30;
  this.hp = 100;
  this.range = 1;
  this.hasAttacked = false;
  this.items = new Array(3);
  this.moveCounter = 0;
}

Druid.prototype = {
  constructor: Druid,


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

var Priest = function(){
  this.attack = 50;
  this.defense = 35;
  this.hp = 75;
  this.range = 1;
  this.hasAttacked = false;
  this.items = new Array(3);
  this.moveCounter = 0;
}

Priest.prototype = {
  constructor: Priest,


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

var Rogue = function(){
  this.attack = 70;
  this.defense = 15;
  this.hp = 100;
  this.range = 1;
  this.hasAttacked = false;
  this.items = new Array(3);
  this.moveCounter = 0;
}

Rogue.prototype = {
  constructor: Rogue,


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

var Mage = function(){
  this.attack = 60;
  this.defense = 15;
  this.hp = 70;
  this.range = 2;
  this.hasAttacked = false;
  this.items = new Array(3);
  this.moveCounter = 0;
}

Mage.prototype = {
  constructor: Mage,


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
