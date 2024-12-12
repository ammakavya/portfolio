import React, { useState } from 'react';


const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square({ value, onSquareClick }) {
console.log(`Rendering the value : ${value}`);
  return (
    <div
      className="square"
       style={squareStyle}
      onClick={onSquareClick}
     
    >
      {value}
    </div>
  );
}

function Board() {
const [squares, setSquares] = useState(Array(9).fill(null));
const [isNext ,setIsNext] = useState(true);

 const handleClick = (i) => {
 if(squares[i] || calculateWinner(squares))
  return;

 const nextSquares = squares.slice();
 nextSquares[i] = isNext ? 'X' : 'O';
 setSquares(nextSquares);
 setIsNext(!isNext);
 };

 const winner = calculateWinner(squares);
 const resetGame =() => {
 setSquares(Array(9).fill(null));
 setIsNext(true);
 };

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{isNext ? 'X' : 'O'}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winner || 'None'}</span></div>
      <button style={buttonStyle} onClick = {resetGame}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square  value = {squares[0]} onSquareClick = {() => handleClick(0)} />
          <Square  value = {squares[1]} onSquareClick = {() => handleClick(1)} />
          <Square  value = {squares[2]} onSquareClick = {() => handleClick(2)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square  value = {squares[3]} onSquareClick = {() => handleClick(3)}/>
          <Square    value = {squares[4]} onSquareClick = {() => handleClick(4)}/>
          <Square    value = {squares[5]} onSquareClick = {() => handleClick(5)}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value = {squares[6]} onSquareClick = {() => handleClick(6)} />
          <Square  value = {squares[7]} onSquareClick = {() => handleClick(7)}/>
          <Square    value = {squares[8]} onSquareClick = {() => handleClick(8)}/>
        </div>
      </div>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


 export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

