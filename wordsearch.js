const createMatrix = function(col, row) {
  let resMatrix = [];
  for (let i = 0; i < row; i++) {
    resMatrix.push(new Array(col).fill("x"));
  }
  return resMatrix;
};
  
const transpose = function(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  
  let newMatrix = createMatrix(row, col);
  
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
};
  
const wordSearch = (letters, word) => {

  if (letters.length <= 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  const reverseJoin = letters.map(ls => ls.reverse().join(''));
  for (let l of reverseJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
