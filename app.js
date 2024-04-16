// assignment no #20

// chapter 31 to 34 (date n time)

// q1

var dObj = new Date ();

// q2

var dObj = new Date () .toString ();

// q3

var d = new Date();
var day = d.getDay();
console.log(day);

// q9

var currentDate = new Date();
currentDate.setFullYear(2025);
console.log(currentDate);

// Q11

var currentDate = new Date();
var targetDay = 1;
var diff = targetDay - currentDate.getDay();
if (diff <=0) {
    diff += 7
}
currentDate.setDate(currentDate.setDate() +diff)
console.log(currentDate.setDate(currentDate.setDate() +diff));

// q12

