/**
 * Author Suprise Doctor Nkosi
 * twitter @supriseDr.
 * mail : dsnnkosi@gmail.com
 * copyright iontas technologies 2022
 */

var ListNode = require("../linked-list/list-node");

/**Use case: Set membership testing module.exports = 
 * 
 * Translated from @wesleytsai. implementation
 * */ 
module.exports = class SkipList{


    constructor(){

        this.head = new ListNode(-Infinity);
    
    }

  coinFlip(){
      return Math.random() < 0.5;
  }

    insert(data){
        var drops = [];
        /**Recursive call and introduced extra parameter*/
        return function insert(at, data){
            
             // data already exists, insertion fail
        if( at.data === data ) return false;

        // if right is smaller, go right
    if( at.right && at.right.data <= data ) {
        return insert.call(this, at.right, data);
      }
  
      // otherwise, go down if possible
      if( at.down ) {
        drops.push(at);
        return insert.call(this, at.down, data);
      }

      // if can't go down, insert
    var base = new ListNode(data);
    base.insertAfter(at);

    while( this.coinFlip() ) {
        var promote = new ListNode(data);
        promote.stackOnTop(base);
        base = promote;
  
        var drop = drops.pop();
        if( drop ) {
          promote.insertAfter(drop);
        } else {
          var newHead = new ListNode(-Infinity);
          newHead.stackOnTop(this.head);
          this.head = newHead;
  
          promote.insertAfter(this.head);
        }
      }
      // insert complete
      return true;
        
    }.call(this, this.head, data); 
};

//search method
search(data){

    return (function search(at, data) {
        // if data is found, return true
        if( at.data === data ) return true;
    
        // if right is smaller, go right
        if( at.right && at.right.data <= data ) {
          return search(at.right, data);
        }
    
        // otherwise, go down if possible
        if( at.down ) {
          return search(at.down, data);
        }
    
        return false;
      })(this.head, data);
}

remove(data){
    return function remove(at, data) {
        // data found -> perform delete
        if( at.data === data ) {
          while( at ) {
            at.remove();
            // if nothing else is on this level // and not on level 1
            if( at.left === this.head && !at.right && this.head.down) {
              // set head to next level down
              this.head = this.head.down;
              this.head.up = null;
            }
            at = at.down;
          }
          // remove complete
          return true;
        }

        // if right is smaller, go right
    if( at.right && at.right.data <= data ) {
        return remove.call(this, at.right, data);
      }
  
      // otherwise, go down if possible
      if( at.down ) {
        return remove.call(this, at.down, data);
      }
  
      // data not found -> remove fail
      return false;
    }.call(this, this.head, data);
    
}

report(){
    var nodes = [];
  var level = 0;
  var head = this.head;
  var at = this.head;
  while( at ) {
    nodes[level] = nodes[level] || [];
    nodes[level].push(at.data);
    if( at.right ) {
      at = at.right;
    } else {
      level ++;
      at = head.down;
      head = head.down;
    }
  }
  return nodes;
}

}

/** Example 
var list = new SkipList();
list.insert(1);
list.insert(20);
list.insert(10);
list.insert(20);
list.insert(8);
list.insert(15);
list.insert(100);

console.log(list.search(1000))
*/
