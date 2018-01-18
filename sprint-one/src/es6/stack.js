class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;

  }

  push(value) {
    this[this.count] = value;
    this.count++;
  };

  pop() {
    this.count === 0 ? this.count : this.count--;
    var x = this[this.count];
    delete this[this.count]
    return x;  };

  size() {
    return this.count;
  };


}
