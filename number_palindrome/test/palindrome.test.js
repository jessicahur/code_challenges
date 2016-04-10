var assert = require('chai').assert;
var main = require( '../palindrome');

describe('Palindrome for numbers', () => {
  it ('should return true for the case of single digit and false if input is empty', () => {
    assert.equal(main('1'), true);
    assert.equal(main(''), false);
  });

  it ('should return true for even length number palindrome', () => {
    assert.equal(main('22'), true, 'it fails at 22');
    assert.equal(main('9229'), true, 'it fails at 9229');
  });

  it ('should return true for odd length number palindrome', () => {
    assert.equal(main('12321'), true, 'it fails at 12321');
  });

  it('should return false if input number is not palindrome', () => {
    assert.equal(main('12'), false, 'fails at 12');
    assert.equal(main('123'), false, 'fails at 123');
  });
});
