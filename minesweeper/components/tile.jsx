import React from "react";

class Tile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
      // debugger
    //   const tile = this.props.tile;
      const {tile} = this.props;
      if (tile.explored) {
        if (tile.bombed) {
          return ( <div>💣</div> );
        } else if (tile.adjacentBombCount()){ //0 is falsy so we can check here
          return ( <div>{tile.adjacentBombCount()}</div> )
        }
      } else if (tile.flagged) {
        // return ( <div>⚐</div> )
        return ( <div>🚩</div> )  // unicode shows up different on macs?
      }
      return ( <div></div> )
    }
}

export default Tile;