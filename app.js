///////*****ASSIGNMENT 1********///////////// */

let output;
function showNumber(limit) {
  for (let i = 0; i <= limit; i++)
    if (i % 2 === 0) {
      output = i
      console.log(output + ' EVEN')
    }

    else {
      console.log(i + ' ODD')
      output = i
    }
  return output
}

showNumber(50) //e.g


///////*****ASSIGNMENT 2********///////////// */

// // const colors = ['red',8, 'green', 'yellow', 'red', 6, 'blue', 200, 600];

// let totalTruthy = 0;

// function countTruthy(array){

// for (let element of array) {

//     // if (0 / element === 0) {
//     //     totalTruthy += 1
//         if (0 / element !== 0) continue;
//         else totalTruthy += 1

// }
// return totalTruthy

// }
// const colors = ['red',8, 'green', 'yellow', 'red', 6, 'blue', 200, 600, 0, 0];

// console.log(countTruthy(colors)) //eg



///////*****ASSIGNMENT 3********///////////// */

// const person = {
//     name: 'Faruq',
//     age: 27,
//     school: 'UI',
//     matriculationYear: 2016,
//     course: 'Agric-Econs',
//     courseYears: 5,
//     graduationYear: 2021,
//     friend: '',
// }

// function showProperties(object) {
//     for (key in object) {
//         if (0 / object[key] === 0) continue;
//         else if (!object[key]) continue; /* Added this to take care of falsy values */
//         console.log('The ' + key + ' is', object[key]);
//     }

// }
// showProperties(person) //eg



///////*****ASSIGNMENT 4********///////////// */

// let result = 0;
// function sum(limit) {
//   for (let i = 1; i < limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result += i;

//     }
//   }
//   console.log(result);

//   return result;
// }

// sum(10) //eg



///////*****ASSIGNMENT 5********///////////// */

// function showPrimes(n) {
//     jumpHere: for (let i = 2; i <= n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) {continue jumpHere;} // Label to jump
//     }
//     console.log(i); // a prime
//     }
//   }

//   showPrimes(24) //eg









// ////////////////////////////////////////////////////////////////


// function square(x) {
//     return x * x;
//   }
  
//   function subtractFour(x) {
//     return square(x) - 4;
//   }
  
//   console.log(subtractFour(5));


// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }

//   function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       console.log(i)  // a prime
//     }
//   }

//   showPrimes(47)

