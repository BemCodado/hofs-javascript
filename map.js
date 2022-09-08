const numbers = [2, 5, 15, 36];

// const getDobleNumber = (array) => {
//   const newArray = [];

//   for (let index = 0; index <= array.length - 1; index++) {
//     newArray.push(array[index] * 2);
//   }

//   return newArray;
// };

// const result = getDobleNumber(numbers);

// console.log(result); // [ 4, 10, 30, 72 ]

const result2 = numbers.map((number) => number * 2);

console.log(result2);
