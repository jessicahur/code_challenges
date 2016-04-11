function main (num) {
  var length = num.length;
  if (length === 0) {
    return false;
  }
  else if(length === 1 ) {
    return true;
  }
  else {
    //even length number
    if (length % 2 === 0) {
      var midNum = length / 2;
      var firstHalf = num.substr(0, midNum);
      var secondHalf = helper(num.substr(midNum, midNum));
    }
    //odd length number
    else {
      var midNum = Math.ceil(length / 2);
      var firstHalf = num.substr(0, midNum - 1);
      var secondHalf = helper(num.substr(midNum, midNum));
    }
    if (firstHalf === secondHalf) return true;
    else return false;
  }
}

function helper (str) {
  var result = '';
  for (var ii = str.length - 1; ii >= 0; ii --) {
    result += str[ii];
  }
  return result;
}

module.exports = main;
