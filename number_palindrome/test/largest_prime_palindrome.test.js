var assert = require('chai').assert;
var largestFunc = require('../largest_prime_palindrome');

describe('Find the largest prime palindrome', () => {
  it ('should find the largest prime palindrome that is less than 1000', () => {
    assert.equal(largestFunc(), 929);
  });
});
