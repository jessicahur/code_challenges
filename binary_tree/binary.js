// https://www.nczonline.net/blog/2009/06/09/computer-science-in-javascript-binary-search-tree-part-1/

function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype = {

    //restore constructor
    constructor: BinarySearchTree,

    add: function (value){
      //create a new item object, place data in
      var node = {
        value: value,
        left: null,
        right: null
      };

      //special case when there is no item in the tree yet
      if (this._root === null) {
        this._root = node;
      }
      else {
        current = this._root;

        while (true) {
          //if the new value is less than this node's value, go left
          if (value < current.value) {
            //if there's no left, then assign new node to left
            if (current.left === null) {
              current.left = node;
              break;
            }
            else {
              current = current.left;
            }
          }
          //if the new value is greater than this node's value, go right
          else if (value > current.value) {
            //if there is no right, then assign new node to right
            if (current.right === null) {
              current.right = node;
              break;
            }
            else {
              current = current.right;
            }
          }
          //if the new value is equal to the current one, ignore it
          else {
            break;
          }
        }//end of while
      }
    },

    contains: function(value){
      var found = false;
      var current = this.root;
      //make sure there's a node to search
      while (!found && current) {
        //if the value is less than the current node's, go left
        if (value < current.value) {
          current = current.left;
        }
        //if the value is greater than the current node's value, go right
        else if (value > current.value) {
          current = current.right;
        }
        //if values are equal, found is true
        else {
          found = true;
        }
      }
      return found;
    },

    remove: function(value){
    },

    size: function(){
      var length = 0;

      this.traverse(function(node) {//this function is the 'process'
        length ++;
      });

      return length;
    },

    toArray: function(){
      var result = [];

      this.traverse(function(node) {
        result.push(node.value);
      });

      return result;
    },

    toString: function(){
      return this.toArray().toString(); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
    },

    traverse: function(process){ //process is a function that should be run on each node in the tree
      //helper function
      function inOrder(node) {
        if (node) {
          //traverse the left subtree, recursive!!
          if (node.left !== null) {
            inOrder(node.left);
          }

          //call the process function on this node
          process.call(this, node);

          //traverse the right subtree
          if (node.right !== null) {
            inOrder(node.right);
          }
        }
      }

      //start with the root
      inOrder(this._root);
    }

};
