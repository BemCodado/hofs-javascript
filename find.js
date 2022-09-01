// const array = [10, 15, 20, 25, 30];

// const find = (array, comparador) => {
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] > comparador) {
//       return array[index];
//     }
//   }
// };

// const maiorQueVinte = find(array, 20);

// console.log(maiorQueVinte); // 25

// ========================================================= //

const array = [10, 15, 20, 25, 30];

const result = array.find((element) => element > 20);

console.log(result);
