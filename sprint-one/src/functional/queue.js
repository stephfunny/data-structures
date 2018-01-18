var Queue = function() {
  var someInstance = {};
  var count = 0;
  var first = 0;
  var last = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[last] = value;
    count++;
    last++;
  };

//some[0] = 'a'; count = 1;
// count = 0;
//

  someInstance.dequeue = function() {
    count === 0 ? count : count--;
    var x = someInstance[first];
    delete someInstance[first];
    first ++;
    return x;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};


//stack / queue
//stack shared behavior
//functional instantiation pattern
//stack-specific behavior
