class Node {
    constructor (val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    push (val) {
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
            
        }else if (this.length == 1){
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return null;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }else {
            this.tail.prev = this.tail;
            this.tail.next = null;
            this.length--;
        }
        return this;
    }

shift(){
    if(!this.head) {
        return `this linked list is empty`;
    }else if(this.length === 1){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }else {
        this.head.next = this.head;
        this.head.prev = null;
        this.length--;
    }
    return this;
}


unshift(val) {
    const node  = new Node(val);

    if(!this.head){
        this.head = node;
         this.tail = node;
         this.length = 1;
    }else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      this.length++;
    }
    return this;

}

getNodeAtIndex(index) {
    if(index < 0 || index >= this.length) return null;
    

    if(index < Math.floor(this.length / 2)){  // if the index is less then the mid index the I will start iterating from head
         let curr = this.head;
         let counter = 0;
         while(curr < index){
             curr = curr.next;
             counter++;
         }
         return curr;
    }else {
        let curr = this.tail;
        let counter = this.length - 1;
        while (counter > index) {
            curr = curr.prev;
            counter--;
        }
        return curr;
    }
}
}