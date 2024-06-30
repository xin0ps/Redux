

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeMove, resetGame } from '../redux/actions';

const Board = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const winner = useSelector((state) => state.winner);

  const handleClick = (index) => {
    if (!winner && !board[index]) {
      dispatch(makeMove(index, currentPlayer));
    }
  };

  const renderCell = (index) => (
    <div key={index} className="cell" onClick={() => handleClick(index)}>
      {board[index]}
    </div>
  );

  const reset = () => {
    dispatch(resetGame());
  };

  return (
    <div>
      <div className="board">
        {board.map((cell, index) => renderCell(index))}
      </div>
      {winner && <div className="winner">Winner: {winner}</div>}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Board;
