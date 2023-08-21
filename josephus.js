class Node {
    constructor(val){
        this.val = val;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }
    
    append(val) {
        const node = new Node(val);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node; // Set tail for the first node
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            node.next = this.head; // Set circular linkage for the new node
            this.head.previous = node; // Update previous node's next pointer
            this.tail = node;
        }
        this.size++;
    }

    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.tail = node;
        } else {
            this.head.previous = node;
            node.next = this.head;
        }
        this.head = node;
        this.size ++;
    }

    pop(){
        if(this.isEmpty()) throw new Error ("List is empty!")
        const temp = this.tail
        if(this.head === this.tail) this.head = null;
        this.tail = this.tail.previous;
        this.tail.next = null;
        this.size --;
        return temp.val
    }

    shift(){
        if(this.isEmpty()) throw new Error ("List is empty!")
        const temp = this.head;
        if(this.head === this.tail) this.tail = null;
        this.head = this.head.next;
        this.head.previous = null;
        this.size --;
        return temp.val
    }

    peekHead(){
        if(this.isEmpty()) throw new Error ("List is empty!")
        return this.head.val;
    }

    peekTail(){
        if(this.isEmpty()) throw new Error ("List is empty!")
        return this.tail.val;
    }
}


function findSurvivor(people, position) {
    let list = new DoublyLinkedList();
    for (let i = 1; i <= people; i++) {
        list.append(i);
    }

    let currentNode = list.head;
    while (list.size > 1) {
        for (let i = 1; i < position; i++) {
            currentNode = currentNode.next;
        }

        const prevNode = currentNode.previous;
        const nextNode = currentNode.next;

        prevNode.next = nextNode;
        nextNode.previous = prevNode;
        console.log('killed:',currentNode.val)

        currentNode = nextNode; // Move to the next person

        list.size--;

    }

    console.log("Survivor:");
}




