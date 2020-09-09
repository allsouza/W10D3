import React from "react";
import Tile from "./tile";

class Board extends React.Component{
    constructor(props) {
        super(props);
    }

  classGenerator(tile) {
    if (tile.explored && tile.bombed) {
      return "tile explored bombed"
    } else if (tile.explored) {
      return "tile explored"
    } else if (tile.flagged) {
      return "tile flagged"
    } else {
      return "tile"
    }
  }

  handleClick(tile, e) {
    this.props.updateGame(tile, e.altKey);
  }

  render() {
    // debugger
    return (
      <div>
        {this.props.board.grid.map((row, idx1) =>{
                    const tiles = row.map((tile, idx2) =>{
                      return <div onClick={(e) => {this.handleClick(tile, e)}} className={this.classGenerator(tile)} key={idx2}><Tile tile={tile} updateGame={this.props.updateGame} /></div>;
                    })
                    return <div className="row" key={idx1}>{tiles}</div>
                })} 
            </div>
        )
    }
}

export default Board;