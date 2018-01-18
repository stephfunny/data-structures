var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
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


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
//  var stackMethods = {};
  stack.count = 0;

  extend(stack, stackMethods);

  //console.log(stack.size());

  return stack;

  // stack.pop = stackMethods.pop;
  // stack.push = stackMethods.push;
  // stack.size = stackMethods.size;
};



// var size = 0;



// var stack = Stack();
//console.log(stack.size);
