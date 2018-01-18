var Stack = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[size] = value;
    size++;
  };

  someInstance.pop = function() {
    size === 0 ? size : size--;
    return someInstance[size];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
