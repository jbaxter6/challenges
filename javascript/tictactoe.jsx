import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import './style.css';

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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

const Board = (props) => {
  const initialBoard = [null, null, null, null, null, null, null, null, null];

  const [activePlayer, setActivePlayer] = useState('1');
  const [board, setBoard] = useState(initialBoard);
  const [winner, setWinner] = useState('');

  const winnerMemo = useMemo(() => {
    const win = calculateWinner(board);
    let str = '';
    if (win) {
      setWinner(win === 'X' ? '1' : '2');
      str = `Player ${win === 'X' ? '1' : '2'} WON`;
    } else {
      str = `Player ${activePlayer}'s turn`;
    }
    return str;
  }, [board]);

  const handleClick = (i) => {
    const x_or_o = activePlayer === '1' ? 'X' : 'O';

    // if board space is an empty string
    if (!board[i]) {
      setBoard(
        board.map((val, index) => {
          if (!val && index === i) {
            setActivePlayer(activePlayer === '2' ? '1' : '2');
            return x_or_o;
          } else {
            return val;
          }
        })
      );
    }
  };

  const reset = () => {
    setBoard(initialBoard);
    setActivePlayer('1');
    setWinner('')
  }

  return (
    <div>
      <p>{winnerMemo}</p>
      <div style={{ display: 'flex' }}>
        <Square handleClick={() => handleClick(0)} value={board[0]} i={0} />
        <Square handleClick={() => handleClick(1)} value={board[1]} i={1} />
        <Square handleClick={() => handleClick(2)} value={board[2]} i={2} />
      </div>
      <div style={{ display: 'flex' }}>
        <Square handleClick={() => handleClick(3)} value={board[3]} i={3} />
        <Square handleClick={() => handleClick(4)} value={board[4]} i={4} />
        <Square handleClick={() => handleClick(5)} value={board[5]} i={5} />
      </div>
      <div style={{ display: 'flex' }}>
        <Square handleClick={() => handleClick(6)} value={board[6]} i={6} />
        <Square handleClick={() => handleClick(7)} value={board[7]} i={7} />
        <Square handleClick={() => handleClick(8)} value={board[8]} i={8} />
      </div>
      {winner && <button onClick={() => reset()}>Reset</button>}
    </div>
  );
};

const Square = (props) => {
  return (
    <div
      style={{
        width: '3rem',
        height: '3rem',
        border: '1px solid grey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => props.handleClick()}
    >
      {props.value}
    </div>
  );
};
