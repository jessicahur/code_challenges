function findPrimes (limit) {
  var primes = '2';
  for (var ii = 2; ii < parseInt(limit); ii ++) {
    for (var jj = ii - 1; jj > 1; jj --) {
      if (ii % jj === 0) break;
      else if (jj === 2) primes += `,${ii}`;
    }
  }
  return primes;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== '') {
      var limit = line;
      console.log(findPrimes(limit));
    }
});
