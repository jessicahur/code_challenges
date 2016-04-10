function findPrimes (limit) {
  var primes = [2];
  for (var ii = 2; ii < limit; ii ++) {
    for (var jj = ii - 1; jj > 1; jj --) {
      if (ii % jj === 0) break;
      else if (jj === 2) primes.push(ii);
    }
  }
  return primes;
}

module.exports = findPrimes;
