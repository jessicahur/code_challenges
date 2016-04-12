/*
The optimization process in which a function can use obj(s) to remember
the results of previous operations to avoid unecessary work.
*/

var fibonacci = function () {
  //memo is hidden using closure
  var memo = [0, 1];
  var fib = function (n) {
    var result = memo[n];
    if(typeof result !== 'number') {
      result = fib(n-1) * fib(n-2);
    }
    return result;
  };
  //memo is hidden but can be updated everytime fibonacci is called
  return fib;
}();
