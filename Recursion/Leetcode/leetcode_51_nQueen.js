function nQueen(n){
        let board = [];
        for(let i=0;i<n;i++){
            board.push(new Array(n).fill('.'));
        }

        let answer = [];
    function isSafe(board,row,col,n){
        // horizontal check
        for(let i=0;i<n;i++){
            if(board[i][col] === 'Q'){
                return false;
            }
        }
        //vertical check
        for(let j =0;j<n;j++){
            if(board[row][j] ==='Q'){
                return false;
            }
        }
        //vertical diagonal
      for(let i =row-1, j =col-1;i>=0 && j>=0;i--,j--){
            if(board[i][j] === 'Q'){
                return false;
            }
      }
      //horizontal diagonal
      for(let i=row-1,j=col+1;i>=0 && j<n;i--,j--){
             if(board[i][j] === 'Q'){
                return false;
            }
      }
      return true;
    }
    function helper(board,row,n){
        if(row === n){
             answer.push(board.map(r => r.join('')));
        }
        for(let j=0;j<n;j++){
            if(isSafe(board,row,j,n)){
                board[row][j] = 'Q';
                helper(board,row+1,n);
                board[row][j] = '.';
            }
        }
    }
    helper(board,0,n);
    return answer;
}

console.log(nQueen(4));