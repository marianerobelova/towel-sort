
module.exports = function towelSort (matrix) {

const resultArray = [];

if (matrix) {
  matrix.forEach((element, index) => {
    
    if (index % 2 === 0) {
      element.forEach((num) => {
        resultArray.push(num);
      });
    } else {
      element.reverse().forEach((num) => {
        resultArray.push(num);
      });
    };
  });
};


  return resultArray;
}
