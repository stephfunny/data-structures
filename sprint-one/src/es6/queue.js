
class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //this.count = 0;
  constructor() {
    this.count = 0;
    this.first = 0;
    this.last = 0;
  }
  //this.count = 0;

  enqueue(value) {
    this[this.last] = value;
    this.count++;
    this.last++;
  };

  dequeue() {
      this.count === 0 ? this.count : this.count--;
      var a = this[this.first];
      delete this[this.first];
      this.first++;
      return a;
  };

  size() {
    return this.count;
  };

}
