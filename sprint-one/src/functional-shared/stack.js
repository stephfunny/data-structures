var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.count++;
  this[this.count] = value;

};

stackMethods.pop = function() {
  this.count === 0 ? this.count : this.count--;
  // var y = this.size;
  // console.log(y);
  console.log(this.count);
  var x = (this[this.count + 1]);
  delete this[this.count + 1];
  return x;
};

stackMethods.size = function() {
  return this.count;
};


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
//  var stackMethods = {};
  stack.count = 0;

  extend(stack, stackMethods);

  return stack;

};
