export const MAKE_MOVE = 'MAKE_MOVE';
export const RESET_GAME = 'RESET_GAME';

export const makeMove = (index, player) => ({
  type: MAKE_MOVE,
  payload: { index, player }
});

export const resetGame = () => ({
  type: RESET_GAME
});