// const array = [10, 15, 20, 25, 30];

// const filter = (array, comparador) => {
//   const resultado = [];

//   for (let index = 0; index < array.length; index++) {
//     if (array[index] > comparador) {
//       resultado.push(array[index]);
//     }
//   }

//   return resultado;
// };

// const maioresQueVinte = filter(array, 20);

// console.log(maioresQueVinte); // [ 25, 30 ]

// ========================================================= //

const array = [10, 15, 20, 25, 30];

const result = array.filter((element) => element > 20);

console.log(result);
