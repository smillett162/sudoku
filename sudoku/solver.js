export function solve(board) {
    console.log(board)
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j].value == '') {
                for (let k = 1; k <= 9; k++) {
                    if (isValid(board, i, j, k)) {
                        board[i][j].value = `${k}`;
                        if (solve(board)) {
                            return board;
                        } else {
                            board[i][j].value = '';
                        }
                    }
                }
                return false;
            }        
        }
   }
   console.log(board)
   return board;
}

function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i].value == k || board[i][col].value == k || board[m][n].value == k) {
          return false;
        }
    }
    return true;
}