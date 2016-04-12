const fs = require ('fs');

function main (filename) {
  var inputs;
  var hashTable = {};

  fs.readFile(filename, 'utf8', (err, data) => {
    inputs = data.split('\n').filter(str => {
      return str.length !== 0;
    });

    //optimization?
    inputs.forEach(input => {
      var params = input.split(' ');
      if ( hashTable.hasOwnProperty(input) ) {
        console.log( hashTable[input] );
      }
      else {
        result = '1';
        for (var ii = 2; ii <= params[2]; ii ++) {
          if ( ii % (params[0] * params[1]) === 0 ) {
            result += ' FB';
          }
          else if ( ii % params[0] === 0) {
            result += ' F';
          }
          else if ( ii % params[1] === 0) {
            result += ' B';
          }
          else {
            result += ' ' + ii;
          }
        }
        //Save result for future use if input is the same
        hashTable[input] = result;
        console.log(result);
      }
    });
  });
}
main('./testcase.txt');
module.exports = main;

// var fs  = require("fs");
// function main () {
//   var hashTable = {};
//   fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
//       if (line != "") {
//           var params = line.split(' ');
//         if ( hashTable.hasOwnProperty(line) ) {
//             console.log( hashTable[line] );
//          }
//         else {

//             result = '1';
//             for (var ii = 2; ii <= params[2]; ii ++) {
//                 if ( ii % (params[0] * params[1]) === 0 ) {
//                     result += ' FB';
//                 }
//                 else if ( ii % params[0] === 0) {
//                     result += ' F';
//                 }
//                 else if ( ii % params[1] === 0) {
//                     result += ' B';
//                 }
//                 else {
//                     result += ' ' + ii;
//                 }
//             }
//             //Save result for future use if input is the same
//             hashTable[line] = result;
//             console.log(result);

//         }
//       }
//   });
// }
// main();
