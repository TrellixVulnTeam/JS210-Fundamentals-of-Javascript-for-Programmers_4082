rlSync = require('readline-sync');

let a = rlSync.question('Enter a number\n');

if (a === '3') {
  console.log("a is 3");
} else if (a === '4') {
  console.log("a is 4");
} else {
  console.log("a is neither 3, nor 4");
}
