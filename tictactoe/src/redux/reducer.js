import { MAKE_MOVE, RESET_GAME } from './actions';

const initialState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null
};

const checkWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
    
  }

  return null;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_MOVE:
      if (state.board[action.payload.index] || state.winner) {
        return state;
      }

      const newBoard = state.board.slice();
      newBoard[action.payload.index] = action.payload.player;
      const newWinner = checkWinner(newBoard);
      
      return {
        ...state,
        board: newBoard,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
        winner: newWinner
      };
      
    case RESET_GAME:
      return initialState;
      
    default:
      return state;
  }
};

export default reducer;