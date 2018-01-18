var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //stack = Object.create(stackMethods);
  this.count = 0;

};

Stack.prototype.push = function(value) {
  this[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  this.count === 0 ? this.count : this.count--;
  var x = this[this.count];
  delete this[this.count];
  return x;
};

Stack.prototype.size = function() {
  return this.count;
};

//new Stack();
