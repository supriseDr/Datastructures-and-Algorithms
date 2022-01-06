var LinkedList = require('./linked-list');

module.exports = class DoubleLinkedList{

    constructor(){
        this.linkedlist = new LinkedList();
        /*
        Display Functions Don't Work when using this construct
        -------------------------------------------
        this._firstNode = this.linkedlist._firstNode;
        this._lastNode = this.linkedlist._lastNode;
        this._totalNode = this.linkedlist._totalNode;
       */ 

    }

    insert(data){
        this.linkedlist.insert(data);
    }

    insertAtFirst(data){
        this.linkedlist.insertAtFirst(data);
    }

    insertAtLast(data){
        this.linkedlist.insertAtLast(data);
    }

    insertBefore(data, query){
        this.linkedlist.insertBefore(data, query);
    }

    insertAfter(data, query){
        this.linkedlist.insertAfter(data, query);
    }

    deleteFirst(){
        this.linkedlist.deleteFirst();
    }

    deleteLast(){
        this.linkedlist.deleteLast();
    }

    delete(query){
        this.linkedlist.delete(query);
    }

    displayForward(){
            console.log("Total Nodes: " + this.getSize() +"\n" );
                let currentNode = this.linkedlist._firstNode;
                while (currentNode !== null) {
                    console.log(currentNode.data + "\n");
                    currentNode = currentNode.next;
                }
    }

    displayBackward(){
        console.log("Total Nodes: " + this.getSize() +"\n" );
            let currentNode = this.linkedlist._lastNode;
            while (currentNode !== null) {
                console.log(currentNode.data + "\n");
                currentNode = currentNode.prev;
            }
}

    getSize(){
        return this.linkedlist.getSize();
    }

}



