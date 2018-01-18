var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.count = 0;
  // var queue.push;
  // var queue.pop;
  //var queue.size = 0;

  //extend(queue, queueMethods);
  return queue;

};

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };


//var this.count = 0;
queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.size] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  this.count === 0 ? this.count : this.count--;
  var a = this[0];
  delete this[0];
  return a;
};

queueMethods.size = function() {
  return this.count;
};

// console.log(queueMethods.size);
//
// var q = new Queue();
// console.log(q.size);
