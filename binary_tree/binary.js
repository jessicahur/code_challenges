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

      var found = false,
          parent = null,
          current = this._root,
          childCount,
          replacementParent;

      //make sure the node exists: while loop goes on if we haven't found the node AND there is a current nodet
      while(!found && current) {
        //if the value is less than the current node, go left
        if (value < current.value) {
          parent = current;
          current = current.left;
        }
        //if the value is greater than the current value, go right
        else if (value > current.value) {
          parent = current;
          current = current.right;
        }
        //if the value is equal, we found our node
        else {
          found = true; //terminates while loop
        }
      }

      //Only proceed of a node of searched value is found
      if (found) {
        //figure out how many children
        childCount = (current.left !== null ? 1 : 0) + (current.right ? 1 : 0);

        //special case: value is at the root
        if (current === this._root) {
          switch (childCount) {
            //no children, just erase the root
            case 0:
              this._root = null;
              break;
            //1 child, use one as the root
            case 1:
              this._root = (current.right === null ? current.left : current.right);
              break;
            //2 children case
            case 2:
              replacement = this._root.left;

              //find the right-most leaf node to be the real new root
              while (replacement.right !== null) {
                replacementParent = replacement;
                replacement = replacementParent.right;
              }

              //if it's not the first node on the left
          }
        }
        //non-root case
        else {
          switch (childCount) {

            //no children: just remove it from the parent
            case 0:
              //if the current value is less than its parent's, null out the left pointer
              if (current.value < parent.value) {
                parent.left = null;
              }
              //if the current value is greater than its parent's, null out the right pointer
              else {
                parent.right = null;
              }
              break;

            //one child: just reassign to parent
            case 1:
              //if the current value is less than its parent's, reset left pointer
              if (current.value < parent.value) {
                parent.left = (current.left === null ? current.right : current.left);
              }
              //if the current value is greater than its parent's, reset right pointer
              else {
                parent.right = (current.left === null ? current.right : current.left);
              }
              break;

            //two children:
            case 2:

            //Find in-order predecessor (value that comes immediately after the value being removed)
            //by examine the left subtree of the node to remove and select the right-most descendant

            //Find in-order successor (value that comes immediately after the value being removed)
            //by reversed the process: exmine the right subtree for the left-most descendant

            //TODO

            }
          }
        }
      }
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
