var Sudoku = function(data)
{
    const n = data.length;
    const isMatrixOfIntegers = () => {
    if (data.some(row => !Array.isArray(row))) {
        return false;
    }
    if (!data.every(row => row.every(el => (typeof el === 'number' && el % 1 === 0)))) {
        return false;
    }
    return true;
};
    const isSquare = () => (data.map(row => row.length).every(length => length === n));
    const hasSquareLength = () => (Math.sqrt(n) % 1 === 0);
    const setIsValid = (set) => {
    const usedAlready = {};
    return set.every(num => {
        if (!(num >= 1 && num <= n)) {
        return false;
    }
    if (usedAlready[num]) {
        return false;
    }
    return usedAlready[num] = true;
});
}
    const hasValidRows = () => data.every(row => setIsValid(row));
    const hasValidColumns = () => (
    data
        .map((row, i) => (data.map(row => row[i])))
.every(column => setIsValid(column))
);
    const hasValidPanels = () => {
    const panelLength = Math.sqrt(n);
    for (var i = 0; i < panelLength; i++) {
        const rowStart = i * panelLength;
        const rows = data.slice(rowStart, rowStart + panelLength);
        for (var j = 0; j < panelLength; j++) {
            const columnStart = j * panelLength;
            const panel = rows.map(row => row.slice(columnStart, columnStart + panelLength))
        .reduce((a, b) => [...a, ...b]);
            if (!setIsValid(panel)) {
                return false;
            }
        }
    }
    return true;
};

    return {
        isValid: function() {
            return [
                isMatrixOfIntegers,
                isSquare,
                hasSquareLength,
                hasValidRows,
                hasValidColumns,
                hasValidPanels,
            ]
                .every(fn => fn());
        }
    };
};



// they way better

// function Sudoku(board) {
//     var sqrt = Math.sqrt(board.length);
//     var esum = board.length * (board.length + 1) / 2;
//
//     function checkDigits(selection) {
//         return selection.reduce(function(sum, digit) {
//             return typeof digit == 'number' ? sum + digit : NaN;
//         }, 0) == esum;
//     }
//
//     return {
//         isValid: function() {
//             return board.every(function(row, i) {
//                 return checkDigits(row) &&
//                     checkDigits(board.map(function(row) {
//                         return row[i];
//                     })) &&
//                     checkDigits(board.map(function(_, j) {
//                         return board[(i/sqrt|0)*sqrt+(j/sqrt|0)][i%sqrt*sqrt+j%sqrt];
//                     }));
//             });
//         }
//     };
// }