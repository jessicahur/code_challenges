var assert = require('chai').assert;
var fizzbuzz = require('../fizzbuzz');
var file = './testing.txt';
var expect = '1 2 F 4 B F 7 8 F B';

describe('FizzBuzz', () => {
  it('should return the expected string', () => {
    assert.equal(main(file), expect);
  });
});
