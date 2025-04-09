'use strict';
// 9.4.2025
// task 5
// Zena and Marsel
/*
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.round(4.5)); // 5?
console.log(Math.trunc(-4.9)); // -4

let x = Math.floor(Math.random() * 10) + 1;
console.log(x); // 1-11

console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(2 ** 3); //8

console.log(Math.min(5, -2, 10, 0)); // -2
console.log(Math.max(3, 7, 1, 9)); // 9
console.log(Math.trunc(-2.9) == Math.floor(-2.9)); // true

// task 2 - if else
let question = 'what is the official name of java script?';
if (prompt(question) == 'ECMAScript') console.log('Correct!');
else console.log('You dont know ECMAScript?');


// task 3 - if else
let score = 75;
let grade;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}
console.log(grade);
console.log(
  'the grade is: ' + score >= 90
    ? 'A'
    : score >= 80
    ? 'B'
    : score >= 70
    ? 'C'
    : score >= 60
    ? 'D'
    : 'F',
);*/

// switch - task 1
// let infoArray = [
//   'יום ראשון - חזרה לשגרה',
//   'יום שני - ישיבת צוות',
//   'יום שלישי - עבודה על פרויקט',
//   'יום רביעי - ספורט בערב',
//   'יום חמישי - סיום משימות',
//   'יום שישי - קניות לשבת',
//   'שבת - מנוחה',
// ];

// let day = prompt('Enter the day: ');
// switch (day.toLocaleLowerCase()) {
//   case '1':
//   case 'sunday':
//   case 'ראשון':
//     console.log(infoArray[0]);
//     break;
//   case '2':
//   case 'monday':
//   case 'שני':
//     console.log(infoArray[1]);
//     break;
//   case '3':
//   case 'tuesday':
//   case 'שלישי':
//     console.log(infoArray[2]);
//     break;
//   case '4':
//   case 'wednesday':
//   case 'רביעי':
//     console.log(infoArray[3]);
//     break;
//   case '5':
//   case 'thursday':
//   case 'חמישי':
//     console.log(infoArray[4]);
//     break;
//   case '6':
//   case 'friday':
//   case 'שישי':
//     console.log(infoArray[5]);
//     break;
//   case '7':
//   case 'saturday':
//   case 'שבת':
//     console.log(infoArray[6]);
//     break;
//   default:
//     alert('There is no such a day');
// }

// Task 1 - loops
// let sum = 0;
// let num = 100;
// while (num >= 1) {
//   sum += num;
//   num--;
// }
// console.log(sum);

// // Task 2 - loops
// let num1;
// do {
//   num1 = prompt('Enter a number: ');
// } while (isNaN(num1) || Number(num1) <= 0);
// console.log(num1);

// // Task 3 - loops
// for (let i = 1; i <= 10; i++) {
//   console.log('7 x ' + i + ' = ' + 7 * i);
// }

// //Task 4 - loops
// const secret = '7';
// let answer = prompt('guess the number??');
// for (;;) {
//   if (answer === secret) {
//     alert('Correct!!!');
//     break;
//   } else {
//     alert('Try again!');
//     answer = prompt('guess the number??');
//   }
// }

// //Task 5 - loops
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 == 0) continue;
//   console.log(i);
// }

// // Task 6 - loops
// let i = 3;

// while (i) {
//   alert(i--);
// } // prints numbers from 3 to 1

// //Task 7 - loops
// let i = 0;
// while (++i < 5) console.log(i); // 1, 2,3,4 /starts from 1 to 4

// let j = 0;
// while (j++ < 5) console.log(j); // 1,2,3,4,5 / start from 1 to 5

// // Task 8 - loops
// for (let i = 0; i < 5; i++) console.log(i); // prints from 0 - 4

// for (let j = 0; j < 5; ++j) console.log(j); // prints from 0 - 4

// //Task 9 - loops
// for (let i = 2; i <= 10; i++) if (i % 2 == 0) console.log(i);

//Task 10 - loops
for (let j = 0; j < 3; j++) {
  alert(`number ${j}!`);
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
