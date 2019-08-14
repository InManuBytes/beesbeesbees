/* Create a Bee class, in pseudoclassical style, with:
 [x] call the Grub superclass
 [x] set the prototype
 [x] set the constructor
 [x] an age property that is set to 5
 [x] a color property that is set to yellow
 [-] a food property that is inherited from grub
 [-] an eat method that is inherited from grub
 [] a job property that is set to keep on growing
 */
var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;