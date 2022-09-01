// const array = [10, 15, 20, 25, 30];

const forEach = (array) => {
  for (let index = 0; index < array.length; index++) {
    console.log(`array[${index}] = ${array[index]}`);
  }
};

forEach(array);

// array[ 0 ] = 10
// array[ 1 ] = 15
// array[ 2 ] = 20
// array[ 3 ] = 25
// array[ 4 ] = 30

// ========================================================= //
const array = [10, 15, 20, 25, 30];

array.forEach((_element, index) =>
  console.log(`array[${index}] = ${array[index]}`)
);
