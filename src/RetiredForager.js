/* Create a RetiredForagerBee class, in pseudoclassical style, with:
 x call the ForagerBee superclass
 x set the prototype
 x set the constructor
 x an age property that is set to 40
 x a job property that is set to gamble
 x a canFly property that is set to false
 x a color property that is set to grey
 x forage method that returns "I am too old, let me play cards instead"
 - a food property that is inherited from grub
 - an eat method that is inherited from grub
 - a treasureChest property inherited from ForagerBee that is set to an empty array []
 an always winning gamble method that allows the bee to add a treasure to the treasureChest */
var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function () {
  return "I am too old, let me play cards instead";
};

RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
}

