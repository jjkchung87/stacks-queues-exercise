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
    
    append(val){
        const node = new Node(val)
        if(this.isEmpty()) {
        this.head = node;    
        } else {
            this.tail.next = node;
            node.previous = this.tail;
        }
        this.tail = node;
        this.size ++;        
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

class Dueques {
    constructor(){
        this._list = new DoublyLinkedList();
        this.head = this._list.head;
        this.tail = this._list.tail;
        this.size = this._list.size;
    }

    appendLeft(val){
        this._list.prepend(val)
        this.size = this._list.size;

    }
    
    appendRight(val){
        this._list.append(val)
        this.size = this._list.size;

    }
    popLeft(){
        this._list.shift()
    }
    popRight(){
        this._list.pop()
    }

    isEmpty(){
        this._list.isEmpty()
    }

}