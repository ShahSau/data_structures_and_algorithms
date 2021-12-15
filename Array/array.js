const checkRow =(rowArr,letter)=>{
    for(let i=0;i<3;i++){
        if(rowArr[i]!=letter){
            return false
        }
    }
    return true
}

const checkColumn = (gameBoardMatrix,columnIndex,letter)=>{
    for(let i=0;i<3; i++){
        if(gameBoardMatrix[i][columnIndex]!=letter){
            return false
        }
    }
    return true
}

const ticTacToeWinner=(gameBoardMatrix,letter)=>{
    // check rows
    let rowWin = checkRow(gameBoardMatrix[0], letter) || checkRow(gameBoardMatrix[1], letter) ||checkRow(gameBoardMatrix[2], letter)
    let colWin = checkColumn(gameBoardMatrix,0,letter) || checkColumn(gameBoardMatrix,1,letter) || checkColumn(gameBoardMatrix,2,letter)

    let winLeftToRight = (gameBoardMatrix[0][0]==letter && gameBoardMatrix[1][1]==letter && gameBoardMatrix[2][2]==letter)

    let winRightToLeft = (gameBoardMatrix[0][2]==letter && gameBoardMatrix[1][1]==letter && gameBoardMatrix[2][0]==letter)

    return rowWin || colWin || winLeftToRight || winRightToLeft

}

let board =[['X','-','O'],['-','X','-'],['-','X','X']];

ticTacToeWinner(board, 'X')