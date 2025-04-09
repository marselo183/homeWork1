'use strict';
// Zena and Marsel
// 09.04.2025
// Task 4 - true & false
let num = prompt('Enter a number: ');
alert(
  num > 0
    ? '1'
    : num < 0
    ? '-1'
    : num == '0'
    ? '0'
    : "You didn't type a number!",
);

Task 5 - true & false
let result = a + b < 4 ? 'Not enough' : 'A lot';

//Task 6 - true & false
let message;
switch (login) {
  case 'Employee':
  case 'Director':
    message = 'Hello';
    break;
  case '':
    message = 'No login';
    break;
  default:
    message = '';
}

// Task 7 - true & false
console.log(false || 'sdf'); // true (prints sdf )
console.log(false && ''); // false
console.log(true || ''); // true
console.log(true && ''); // false ?
console.log(undefined || null); // null
console.log(undefined || 0 || null); // null
console.log(undefined && 0 && null); // undefined
console.log(1 || 0); // true (prints 1)
console.log(null || 1); // true (prints 1)
console.log(null || 0 || 1); // true (prints 1)
