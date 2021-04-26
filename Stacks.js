/* This file contains implementation and operations of Stacks*/

// Stacks using arrays

class Stack {
    constructor(size) {
        this.size = size
        this.top = -1
        this.items = []
    }
    // push
    push(element) {
        if (this.top < this.size - 1) {
            this.top++
            this.items[this.top] = element
        } else {
            console.log("Stack overflow")
        }
    }
    //pop
    pop() {
        if (this.top === -1) {
            console.log("Stack underflow")
            return this.top
        }
        const topElement = this.items[this.top]
        this.top--
        return topElement
    }

    //peek - look at any element
    // we need to return an element at a particular position

    peek(position) {
        const index = this.top - position + 1
        if (index < 0 || index > this.size) return null
        return this.items[index]
    }

    isEmpty() {
        return this.top === -1
    }

    isFull() {
        return this.top === this.size - 1
    }
}

const stack = new Stack(5)
stack.push(23)
stack.push(3)
stack.push(2333)
stack.push(233)
stack.push(233)
stack.push(233)


// console.log(stack.items)
console.log(stack.isFull())