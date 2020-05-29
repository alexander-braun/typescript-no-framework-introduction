"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// Function that does not return a value
function printResult(num) {
    console.log('Result ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
printResult(add(5, 12));
addAndHandle(5, 10, function (result) {
    console.log(result);
});
