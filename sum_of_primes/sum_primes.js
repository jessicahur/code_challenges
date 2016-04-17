function findPrimes () {
  var primes = 2;
  for (var ii = 2; ii < parseInt(limit); ii ++) {
    for (var jj = ii - 1; jj > 1; jj --) {
      if (ii % jj === 0) break;
      else if (jj === 2) primes += `,${ii}`;
    }
  }
  return primes;
}

var primes = [2, 3];
var current = 4;
while (true) {
  if (primes.length === 1000) break;
  for (var ii = current - 1; ii > 1; ii --) {
    if (current % ii === 0) break;
    else if (ii === 2) {
      primes.push(current);
    }
  }
  current ++;
}

var sum = primes.reduce((prev, curr) => {
  return prev + curr;
});

console.log(sum);
