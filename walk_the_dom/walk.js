var walk_the_DOM = function walk (node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
    walk(node, func);
    node = node.nextSubling;
  }
};

/*
params :
  * node: the current node
  * func: a function that takes in node
For each node:
  * apply func on node
  * check if node has a child (firstChild)
    * yes: call walk on this firstChild -> recursive | Once done, assign node on the next sibling
    * no: terminate while loop and the function stops
*/
