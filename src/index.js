
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (matrix === undefined || matrix.length === 0) {
	return[];
  }
  let matrixString = [];
  matrix.forEach( (array, index) => {
    if (index % 2 === 0) {
      matrixString = [...matrixString, ...array];
    } 
	else {
      matrixString = [...matrixString, ...array.reverse()];
    }
  }
  )
  return matrixString;
}	
