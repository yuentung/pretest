class Stack {
    constructor(rawData) {
        this.rawData = rawData;
        this.stack = null;
        this.topIndex = null;
    }

    buildStack() {
        this.stack = new Array(this.rawData.length);
        for (let i = 0; i < this.rawData.length; i++) {
            this.push(this.rawData[i]);
        }
    }

    push(value) {
        if (this.size() === this.stack.length) {
            this.expandSpace();
        }
        if (this.size() === 0) {
            this.topIndex = 0;
        } else {
            this.topIndex++;
        }
        this.stack[this.topIndex] = value;
    }

    size() {
        if (this.topIndex === null) {
            return 0;
        }
        return this.topIndex + 1;
    }

    expandSpace() {
        const newStack = new Array(this.stack.length * 2);
        for (let i = 0; i < this.stack.length; i++) {
            newStack[i] = this.stack[i];
        }
        this.stack = newStack;
    }

    pop() {
        if (this.size() === 0) {
            return null;
        }
        const value = this.stack[this.topIndex];
        this.stack[this.topIndex] = null;
        if (this.size() === 1) {
            this.topIndex = null;
        } else {
            this.topIndex--;
        }
        return value;
    }
}

const numbers = [0, 1, 2, 3, 4];
const stack = new Stack(numbers);
stack.buildStack();

stack.push(5);

let value = stack.pop();
value = stack.pop();
value = stack.pop();
value = stack.pop();
value = stack.pop();
value = stack.pop();

value = stack.pop();