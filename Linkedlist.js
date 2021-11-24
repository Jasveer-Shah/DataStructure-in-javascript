class Node {
    constructor(element, next) {
          this.element = element;
          this.next = next || null;
    }
}

class LinkedList {
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }


prepand(value) {

    const node = new Node(value);
    if(!this.head){
        this.head = node;
        this.tail = node;
    }else{
        node.next = this.head;
        this.head = node;
    }
    this.size++;
    return this
}

append(value){

    const node = new Node(value);
    if(!this.head){
        this.head = node;
        this.tail = node;
    }else {
        this.tail.next = node;
        this.tail = node;
    }
    this.size += 1;
    return this;
}

remove(value){
     if(!this.head) return null;
     if(this.size == 1 && this.head.element == value){
            this.head = null;
            this.tail = null;
            this.size = null;
     }else {
         let current = this.head;
         while(current.next.element !== value) {
             current = current.next;
         }
         current.next = current.next.next;
        this.size--;
        }
   return this;
}

find(value) {
    let current;
    current = this.head;
    while(current){
        if(current.element == value){
            return true;
        }
        current = current.next;
    }
    return false;
}

print(){
    let output = json.Stringify(this);
    return output;
}

pop(){
    if(!this.head)  return undefined;
    if(this.size == 1){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }else {
        let curr = this.head;
        let newTail = curr;
        while(curr.next){
            curr = curr.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.size--;
    }
    return this;
}
}