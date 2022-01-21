/**
 * Author Suprise Doctor Nkosi
 * twitter @supriseDr.
 * mail : dsnnkosi@gmail.com
 * copyright iontas technologies 2022
 */

//Import the list node module
var ListNode = require("./list-node");

module.exports = class LinkedList{

    constructor(){
  
      //Default values
      this._firstNode = null;
      this._lastNode = null;
      this._totalNode = 0;
      this._currentNode = null;
      this._currentPosition = 0;
  
    }
    //add initial config of null to datatyping
  
    insert(data){
        let newNode = new ListNode(data);
        if (this._firstNode === null) {
            this._firstNode = newNode;
            this._lastNode = newNode;
        } else {
          this.currentNode = this._lastNode;
          this.currentNode.next = newNode;
          newNode.prev = this.currentNode;
          this._lastNode = newNode;
          }
          this._totalNode++;
          return true;
    }
  
    insertAtFirst(data){
      let newNode = new ListNode(data);
          if (this._firstNode === null) {
              this._firstNode = newNode;
              this._lastNode = newNode;
          } else {
              let currentFirstNode = this._firstNode;
              this._firstNode = newNode;
              newNode.next = currentFirstNode;
              this._lastNode = currentFirstNode;
          }
          this._totalNode++;
          return true;
    }

    insertAtLast(data){
        let newNode = new ListNode(data);
        if (this._firstNode === null) {
            this._firstNode = newNode;
            this._lastNode = newNode;
        } else {
            let currentNode = this._lastNode;
            currentNode.next = newNode;
            newNode.prev = currentNode;
            this._lastNode = newNode;
        }
        this._totalNode++;
        return true;
    }
  
    search(){
      if (this._totalNode) {
        let currentNode = this._firstNode;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }
    return false;
    }
  
    insertBefore(data, query){
      let newNode = new ListNode(data);
  
          if (this._firstNode) {
              let previous = null;
              let currentNode = this._firstNode;
              while (currentNode !== null) {
                  if (currentNode.data === query) {
                      newNode.next = currentNode;
                      if (previous === null) {
                          this._firstNode = newNode;
                      } else {
                          previous.next = newNode;
                      }
                      this._totalNode++;
                      break;
                  }
                  previous = currentNode;
                  currentNode = currentNode.next;
                  
              }
          }
    }
  
    insertAfter(data, query){
      let newNode = new ListNode(data);
  
          if (this._firstNode) {
              let nextNode = null;
              let currentNode = this._firstNode;
              while (currentNode !== null) {
                  if (currentNode.data === query) {
                      if (nextNode !== null) {
                          newNode.next = nextNode;
                      }
                      currentNode.next = newNode;
                      this._totalNode++;
                      
                      if(currentNode === this._lastNode) {
                          this._lastNode = newNode;
                      }
                      
                      break;
                  }
                  currentNode = currentNode.next;
                  nextNode = currentNode.next;
              }
          }
    }
  
    deleteFirst(){
      if (this._firstNode !== null) {
        if (this._firstNode.next !== null) {
            this._firstNode = this._firstNode.next;
        } else {
            this._firstNode = null;
            this._lastNode = null;
        }
        this._totalNode--;
        return true;
    }
    return false;
    }
  
    deleteLast(){
      if (this._firstNode !== null) {
      let currentNode = this._firstNode;
        if (currentNode.next === null) {
            this._firstNode = null;
        } else {
            let previousNode = null;
  
            while (currentNode.next !== null) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
  
            previousNode.next = null;
            this._lastNode = previousNode;
            this._totalNode--;
            return true;
        }
    }
    return true;
    }
  
    delete(query){
      if (this._firstNode) {
        let previous = null;
        let currentNode = this._firstNode;
        while (currentNode !== null) {
            if (currentNode.data === query) {
                if (currentNode.next === null) {
                    previous.next = null;
                } else {
                    previous.next = currentNode.next;
                }
                
                if(currentNode === this._lastNode) {
                    this._lastNode = previous;
                }
  
                this._totalNode--;
                break;
            }
            previous = currentNode;
            currentNode = currentNode.next;
        }
    }
    }
  
    reverse(){
      if (this._firstNode !== null) {
        if (this._firstNode.next !== null) {
            let reversedList = null;
            let next = null;
            let currentNode = this._firstNode;
            while (currentNode !== null) {
                next = currentNode.next;
                currentNode.next = reversedList;
                reversedList = currentNode;
                currentNode = next;
            }
            this._firstNode = reversedList;
        }
    }
    }
  
    getNthNode(n = 0){
      let count = 1;
          if (this._firstNode !== null && n <= this._totalNode) {
              let currentNode = this._firstNode;
              while (currentNode !== null) {
                  if (count === n) {
                      return currentNode;
                  }
                  count++;
                  currentNode = currentNode.next;
              }
          }
    }
  
    display(){
      console.log("Total Nodes: " + this.getSize() );
          let currentNode = this._firstNode;
          while (currentNode !== null) {
              console.log(currentNode.data + "\n");
              currentNode = currentNode.next;
          }
    }
  
    getSize(){
      return this._totalNode;
    }
  
    current(){
      return this._currentNode.data;
    }
  
    next(){
      this._currentPosition++;
      this._currentNode = this._currentNode.next;
    }
  
    key(){
      return this._currentPosition;
    }
  
    rewind(){
      this._currentPosition = 0;
      this._currentNode = this._firstNode;
    }
  
    valid(){
      return this._currentNode !== null;
    }
  
  }

