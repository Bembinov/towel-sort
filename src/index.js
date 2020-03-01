// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) 
	  return [];
    return new Array().concat( ...matrix.map((item, x) => {
        if (x % 2 === 0) {
            return item.sort((a, b) => a - b)
        } else {
            return item.sort((a, b) => b - a)
        }    
    }));
}
