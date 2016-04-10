var assert = require('chai').assert;
var primeFunc = require('../primes');

describe('Find Primes in range', () => {
  it ('should return the expected array of primes', () => {
    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 , 97];
    assert.deepEqual(primes, primeFunc(100));
  });
});
