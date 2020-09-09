import React from 'react';
import Board from "./board";
import * as GameLogic from "../game_logic/minesweeper";

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: new GameLogic.Board(9, 10)
    };
    this.updateGame = this.updateGame.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, altKey) {
    //   debugger
    if(altKey){
        tile.toggleFlag();
    }
    else{
        tile.explore();
    }
    this.setState({ board: this.state.board })
  }

  gameOver(){
    const lost = this.state.board.lost();
    const won = this.state.board.won();
    if(lost){
        return <p>You lost!</p>
    }
    else if(won){
        return <p>You won!</p>
    }
    else{
        return <p></p>
    }
  }

  restartGame() {
    this.setState({ board: new GameLogic.Board(9, 10) })
    // this.state.board.generateBoard();
    // this.setState({ board: this.state.board })
  }

  render() {
    return (
        <>
        <Board board={this.state.board} updateGame={this.updateGame}/>
        <div className={(this.state.board.lost()||this.state.board.won()) ? "modal-outer active" : "modal-outer"}>
            <div className="modal-box">
                {this.gameOver()}
                <button onClick={this.restartGame}>Play Again</button>
            </div>
        </div>
        </>
    )
  }
}

export default Game;