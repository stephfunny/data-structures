var Queue = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[size] = value;
    size++;

  };

  someInstance.dequeue = function() {
    size === 0 ? size : size--;
    var x = someInstance[0];
    console.log('before deletion, x is ' + x);
    delete someInstance[0];
    console.log('after deletion, x is ' + x);

    return x;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};


//stack / queue
//stack shared behavior
//functional instantiation pattern
//stack-specific behavior
