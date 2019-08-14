/* Create a ForagerBee class, in pseudoclassical style, with:
x call the Bee superclass
x set the prototype
x set the constructor
x an age property that is set to 10
x a job property that is set to find pollen
- a color property inherited from bee that is set to yellow
- a food property that is inherited from grub
- an eat method that is inherited from grub
x a canFly property that is set true
x a treasureChest property that is set to an empty array []
x a forage method that allows the bee to add a treasure to the treasureChest */
var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};


