const validSudoku=(board)=>{
    for(let i =0; i<board.length;i++){
        let rowMap = {}
        let colMap = {}
        let boxMap = {}
        for(let j=0; j<board[i].length;j++){

            let box = board[3* Math.floor(i/3) +Math.floor(j/3)][3*(i%3)+(j%3)]
            
            if(board[i][j] != '.'){
                if(rowMap[board[i][j]]) return false;
                rowMap[board[i][j]] = 1;
            }
            if(board[j][i] != '.') {
                if(colMap[board[j][i]]) return false;
                colMap[board[j][i]] = 1;
            }
            if(box!= '.'){
                if(boxMap[box]) return false;
                boxMap[box] = 1;
            }
        }
    }
    return true;
}
const input=[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(validSudoku(input))