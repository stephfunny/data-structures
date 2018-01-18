var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  stack = Object.create(stackMethods);
  stack.count = 0;

  return stack;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.size] = value;
  this.count++;
};

stackMethods.pop = function() {
  this.count === 0 ? this.count : this.count--;
  return this[this.size];
};

stackMethods.size = function() {
  return this.count;
};
