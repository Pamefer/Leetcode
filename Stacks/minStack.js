
var MinStack = function() {
    this.elements = [];
  };
  MinStack.prototype.push = function(x) {
    this.elements.push({
      value: x,
      min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
    });
  };
  MinStack.prototype.pop = function() {
    this.elements.pop();
  };
  MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1].value;
  };
  MinStack.prototype.getMin = function() {
    return this.elements[this.elements.length - 1].min;
  };
  
  MinStack minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  