
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeMove } from './redux/actions';
import Board from './components/Board';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const winner = useSelector((state) => state.winner);

  useEffect(() => {
    if (currentPlayer === 'O' && !winner) {
      const emptyCells = board.map((cell, index) => (cell ? null : index)).filter((index) => index !== null);
      const randomMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      dispatch(makeMove(randomMove, 'O'));
    }
  }, [currentPlayer, winner, board, dispatch]);

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
};

export default App;
