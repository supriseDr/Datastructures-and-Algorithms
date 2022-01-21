/**
 * Source Bundling Linked Datastructures Arvix
  * Author Suprise Doctor Nkosi
 * twitter @supriseDr.
 * mail : dsnnkosi@gmail.com
 * copyright iontas technologies 2022
 */
//[Function: ListNode]

module.exports = class ListNode {

    constructor(data) {
       
        this.next = null;
        this.prev = null;

        this.data = data

        //for skip links construct the following
        this.up = null;
        this.down = null;

      }

      stackOnTop(node){
        this.up = node.up;
        node.up && (node.up.down = this);
        node.up = this;
        this.down = node;
      }

      remove(){
        this.down && (this.down.up = this.up);
        this.left && (this.left.right = this.right);
        this.right && (this.right.left = this.left);
        this.up && (this.up.down = this.up);
      } 

      //Refactor this code as its a duplication
      insertAfter(node){
        this.right = node.right;
        node.right && (node.right.left = this);
        node.right = this;
        this.left = node;
      };

}
