const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    const transponsed = transpose(letters);
    const verticalJoin = transponsed.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    return false;
}
const transpose = function (matrix) {
    // Put your solution here
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    const newMatrix = [];
    for (let col = 0; col < colLength; col++) {
        let row = 0;
        const innerMatrix = [];
        while (row < rowLength) {
            innerMatrix.push(matrix[row][col]);
            row++;
        }
        newMatrix.push(innerMatrix);
        }
    return newMatrix;
    };

module.exports = wordSearch