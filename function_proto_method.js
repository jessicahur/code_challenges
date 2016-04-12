//Augmenting Function prototype to make methods available to all instances of Function
Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
}

//Add curry method
Function.method('curry', function () {
  var slice = Array.prototype.slice, args = slice.apply(arguments),
  that = this;
  return function () {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});

/* Notes:
Augmenting types: JavaScript allows the basic types of the language to be augmented,
which means you can add a method to Object
(or Function, Array, String, Number, RegEx, Boolean).prototype and make that method available to all objects

Curry: Allows us to produce a new function by combining a function and an argument
*/
