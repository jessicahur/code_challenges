var findPrimeFunc = require('./primes');
var palindromeFunc = require('./palindrome');

function largestPP () {
  var primesP = findPrimeFunc(1000);
  var result = 0;
  primesP.forEach(prime => {
    if (palindromeFunc(prime.toString())) result = prime;
  });

  return result;
}

module.exports = largestPP;
