var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.first = 0;
  this.last = 0;

};


Queue.prototype.enqueue = function(value) {
  this[this.last] = value;
  this.count++;
  this.last++;
};

Queue.prototype.dequeue = function() {
  this.count === 0 ? this.count : this.count--;
  var a = this[this.first];
  delete this[this.first];
  this.first++;
  return a;
};

Queue.prototype.size = function() {
  return this.count;
};

//var Queues = new Queue ();
