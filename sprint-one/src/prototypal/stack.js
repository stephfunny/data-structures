var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.count = 0;

  return stack;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  this.count === 0 ? this.count : this.count--;
  var x = this[this.count];
  delete this[this.count]
  return x;

};

stackMethods.size = function() {
  return this.count;
};
