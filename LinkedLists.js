/* This file contains implementation and operations of Linked Lists */
// Create Node
class Node {
    constructor(element, nextNode) {
        this.element = element;
        this.nextNode = nextNode
    }
}

// Create LinkedList
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    // insertAtHead
    insertAtHead(element) {
        // create a node
        // point this to head node -> next node of new node should be current head node
        const newHeadNode = new Node(element, this.head)
        this.head = newHeadNode
        this.size++
    }
    // printList -> prints all elements
    printList() {
        let currentNode = this.head
        while (currentNode) {
            console.log(currentNode.element)
            currentNode = currentNode.nextNode
        }
    }
    // get At
    getAt(index) {
        // check of index is proper
        if (index > this.size && index < 0) {
            return null
        }
        let currentIndex = 0
        let currentNode = this.head
        while (currentIndex <= index) {
            if (currentIndex === index) {
                return currentNode?.element || null
            }
            currentNode = currentNode.nextNode
            currentIndex++
        }
    }
    // get All in an array

    getAll() {
        const linkedListArray = []
        let currentNode = this.head
        while (currentNode) {
            linkedListArray.push(currentNode.element)
            currentNode = currentNode.nextNode
        }
        return linkedListArray
    }

    // insertAtTail
    insertAtTail(element) {
        const tailNode = new Node(element, null);
        let currentNode = this.head
        if (!currentNode) {
            this.head = tailNode
            return
        }
        while (currentNode) {
            console.log(currentNode)
            if (!currentNode.nextNode) {
                currentNode.nextNode = tailNode
                return
            }
            currentNode = currentNode.nextNode
        }
    }
    // insertAtIndex
    insertAtIndex(index, element) {
        if (index >= this.size || index < 0) return
        let currentIndex = 0
        let previousNode = this.head
        let currentNode = this.head

        while (currentIndex <= index) {
            if (currentIndex === index) {
                if (index === 0) {
                    // this.head = new Node(element, this.head)
                    this.insertAtHead(element)
                    return
                }
                previousNode.nextNode = new Node(element, currentNode)
                return
            }
            previousNode = currentNode
            currentNode = currentNode.nextNode
            currentIndex++

        }
    }
    // removeFirst
    removeFirst() {
        this.head = this.head.nextNode
    }
    // removeLast

    removeLast() {
        let currentNode = this.head
        let previousNode = this.head
        while (currentNode) {
            if (!currentNode.nextNode) {
                previousNode.nextNode = null
                return
            }
            previousNode = currentNode
            currentNode = currentNode.nextNode
        }
    }

    // removeAtIndex
    removeAt(index) {
        if (index > this.size) {
            return
        }
        let currentIndex = 0
        let currentNode = this.head
        let previousNode = this.head
        while (currentNode) {
            if (index === currentIndex) {
                //remove element
                if (index === 0) {
                    this.head = currentNode.nextNode
                    return
                }
                previousNode.nextNode = currentNode.nextNode
                return
            }
            previousNode = currentNode
            currentNode = currentNode.nextNode
            currentIndex++
        }
    }
    // removeAll
    removeAll() {
        this.head = null
    }
    // concatenate / join two lists
    static concatLists(l1, l2) {
        let newLL = new LinkedList()
        let currentL1Node = l1.head
        let currentL2Node = l2.head

        while (currentL1Node) {
            newLL.insertAtHead(currentL1Node.element)
            if (!currentL1Node.nextNode) break
            currentL1Node = currentL1Node.nextNode
        }

        while (currentL2Node) {
            newLL.insertAtHead(currentL2Node.element)
            if (!currentL2Node.nextNode) break
            currentL2Node = currentL2Node.nextNode
        }
        return newLL.getAll()
    }

    // merge two lists
    static mergeSortedLists(l1, l2) {

        let firstNode = l1.head
        let secondNode = l2.head
        let thirdNode = null
        let lastNode = null

        // initially check which head is small and get the third and fourth on that head
        if (firstNode.element < secondNode.element) {
            thirdNode = lastNode = firstNode
            firstNode = firstNode.nextNode
            lastNode.nextNode = null
        } else {
            thirdNode = lastNode = secondNode
            secondNode = secondNode.nextNode
            lastNode.nextNode = null
        }
        while (firstNode && secondNode) {
            if (firstNode.element < secondNode.element) {
                lastNode.nextNode = firstNode
                lastNode = firstNode
                firstNode = firstNode.nextNode
                lastNode.nextNode = null
            } else {
                lastNode.nextNode = secondNode
                lastNode = secondNode
                secondNode = secondNode.nextNode
                lastNode.nextNode = null
            }
        }
        if (firstNode) {
            lastNode.nextNode = firstNode
        } else if (secondNode) {
            lastNode.nextNode = secondNode
        }
        while (thirdNode) {
            console.log(thirdNode.element)
            thirdNode = thirdNode?.nextNode
        }
        console.log(l1)
        console.log(l2)
    }


}


let ll = new LinkedList()
ll.insertAtHead(70)
ll.insertAtHead(30)
ll.insertAtHead(10)



let l2 = new LinkedList()
l2.insertAtHead(3000)
l2.insertAtHead(2000)
l2.insertAtHead(1000)



LinkedList.mergeSortedLists(ll, l2)