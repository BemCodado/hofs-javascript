const grades = [8, 7.5, 6.5, 9];

// const getMedianGrade = (array) => {
//   let summation = 0;

//   for (let index = 0; index < array.length; index++) {
//     summation += array[index];
//   }

//   return summation / 4;
// };

const getMedianGrade = (array) => {
  const summation = array.reduce((acc, current) => {
    return (acc += current);
  }, 0);

  return summation / 4;
};

// const result = getMedianGrade(grades);

console.log(getMedianGrade(grades)); // 7.75
