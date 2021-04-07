class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst = val => {
        const node = {
            value: val,
            next: this.head
        }
        this.head = node;
    }

    insertLast = val => {
        const node = {
            value: val,
            next: null
        }

        if(!this.head){
            this.head = node;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }

    find = val => {
        let current = this.head;
        if(!this.head) {
            return null
        }
        while(current.value !== val) {
            if(current.next === null) {
                return null;
            }
            else {
                current = current.next;
            }
        }
        return current;
    }

    remove = val => {
        if(!this.head) {
            return null;
        }
        if(this.head.value === val) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previousNode = this.head;

        while((current !== null) && (current.value !== val)) {
            previousNode = current;
            current = current.next;
        }
        if(current === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = current.next;
    }

    getAt = index => {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node
            }
            counter++;
            node = node.next
        }
        return null;

    }

    insertAt = (val, index) => {
        if(!this.head) {
            this.head = { value: val, next: null };
            return;
        }

        if(index === 0) {
            this.head = { value: val, next: this.head };
            return;
        }

        const previousNode = this.getAt(index - 1);
        let newNode = { value: val, next: previousNode.next };
        previousNode.next = newNode;
        
        return this.head
    }
}

const sll = new LinkedList();

//push node
sll.insertLast('Apollo');
sll.insertLast('Boomer');
sll.insertLast('Helo');
sll.insertLast('Husker');
sll.insertLast('Starbuck');

//display linked list
const diplayLL = function(linkedList) {
    return linkedList;
}

console.log(diplayLL(sll.head));

module.exports = LinkedList;
