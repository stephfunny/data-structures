var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.count = 0;
  queue.first = 0;
  queue.last = 0;

  return queue;

};
queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.last] = value;
  this.count++;
  this.last++;
};

queueMethods.dequeue = function() {
  this.count === 0 ? this.count : this.count--;
  var a = this[this.first];
  delete this[this.first];
  this.first++;
  return a;
};

queueMethods.size = function() {
  return this.count;
};
