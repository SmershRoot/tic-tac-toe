class TicTacToe {
    constructor() {
        this.gameBoard = [[null,null,null],[null,null,null],[null,null,null]];
        this.isX = true;
        this.steps = 0;
    }

    getCurrentPlayerSymbol() {
        return this.isX ? 'x': 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameBoard[rowIndex][columnIndex]!=null){
            return;
        }
        this.gameBoard[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.isX = !this.isX;
        this.steps+=1;
    }

    isFinished() {
        return this.getWinner()!=null || this.isDraw();
    }

    getWinner() {
        if(this.gameBoard[0][0] == this.gameBoard[0][1] && this.gameBoard[0][0] == this.gameBoard[0][2]){
            return this.gameBoard[0][0];
        }
        if(this.gameBoard[1][0] == this.gameBoard[1][1] && this.gameBoard[1][0] == this.gameBoard[1][2]){
            return this.gameBoard[1][0];
        }
        if(this.gameBoard[2][0] == this.gameBoard[2][1] && this.gameBoard[2][0] ==  this.gameBoard[2][2]){
            return this.gameBoard[2][0];
        }
        if(this.gameBoard[0][0] == this.gameBoard[1][0] && this.gameBoard[0][0] ==  this.gameBoard[2][0]){
            return this.gameBoard[0][0];
        }
        if(this.gameBoard[0][1] == this.gameBoard[1][1] && this.gameBoard[0][1] ==  this.gameBoard[2][1]){
            return this.gameBoard[0][1];
        }
        if(this.gameBoard[0][2] == this.gameBoard[1][2] && this.gameBoard[0][2] == this.gameBoard[2][2]){
            return this.gameBoard[0][2];
        }
        if(this.gameBoard[0][0] == this.gameBoard[1][1] && this.gameBoard[0][0] == this.gameBoard[2][2]){
            return this.gameBoard[0][0];
        }
        if(this.gameBoard[0][2] == this.gameBoard[1][1] && this.gameBoard[0][2] == this.gameBoard[2][0]){
            return this.gameBoard[0][2];
        }
        return null;
    }

    noMoreTurns() {
        return this.steps>8;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner()==null;
    }

    getFieldValue(rowIndex, colIndex) {
        let fieldValue =  this.gameBoard[rowIndex][colIndex];
        return fieldValue==null? null : fieldValue;
    }
}

module.exports = TicTacToe;
