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

// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value. It calls walk_the_DOM, passing it a
// function that looks for an attribute name in the
// node. The matching nodes are accumulated in a
// results array.

var getElementsByAttribute = function (attribute, value) {
  var results = [];

  walk_the_DOM(document.body, function (node) {
    //We're only interested in element nodes which match the input attribute
    //The value of actual will be the element node's attribute's value
    var actual = node.nodeType === 1 && node.getAttribute(attribute);

    //Use typeof value !== 'string' because value is optional, can be undefined, and we don't accept any other value type other than string.
    if (typeof actual === 'string' &&
                (actual === value || typeof value !== 'string')) {
      results.push(node);
    }
  });
  return results;
};

/* Notes:
For nodeType:
  If the node is an element node, the nodeType property will return 1.

  If the node is an attribute node, the nodeType property will return 2.

  If the node is a text node, the nodeType property will return 3.

  If the node is a comment node, the nodeType property will return 8.

*/
