class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) return this.items[0];
    else return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size());
stack.print();
