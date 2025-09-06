const findWinner = (
  board: Array<number | null>[],
  size: number,
  winLength = size,
) => {
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  for (let r = 0; r < size; r += 1) {
    for (let c = 0; c < size; c += 1) {
      const player = board[r][c];

      if (player !== null) {
        // eslint-disable-next-line no-restricted-syntax
        for (const [dr, dc] of directions) {
          const cells = [[r, c]];
          let count = 1;

          for (let k = 1; k < winLength; k += 1) {
            const nr = r + dr * k;
            const nc = c + dc * k;

            if (nr < 0 || nr >= size || nc < 0 || nc >= size) break;
            if (board[nr][nc] !== player) break;

            cells.push([nr, nc]);
            count += 1;
          }

          if (count === winLength) {
            return cells;
          }
        }
      }
    }
  }

  return [];
};

const SKIP_BLOCK_OPPONENT_CHANCE = 10;

const findTheBestMove = (
  board: Array<number | null>[],
  size: number,
  isXTurn?: boolean,
  winLength = size,
) => {
  const computerValue = isXTurn ? 0 : 1;
  const opponentValue = isXTurn ? 1 : 0;

  // Find the winning cell
  // Check all combinations of cells
  for (let r = 0; r < size; r += 1) {
    for (let c = 0; c < size; c += 1) {
      if (board[r][c] === null) {
        const clonedBoard = board.map(row => row.slice());
        clonedBoard[r][c] = computerValue;

        const winCords = findWinner(clonedBoard, size, winLength);

        if (winCords.length !== 0) {
          return { cords: [r, c], winCords };
        }
      }
    }
  }

  // Block if opponent if possible
  // Check all combinations of cells
  for (let r = 0; r < size; r += 1) {
    for (let c = 0; c < size; c += 1) {
      if (board[r][c] === null) {
        const clonedBoard = board.map(row => row.slice());
        clonedBoard[r][c] = opponentValue;

        const possibleWinCords = findWinner(clonedBoard, size, winLength);

        if (possibleWinCords.length !== 0) {
          if (Math.random() * 100 >= SKIP_BLOCK_OPPONENT_CHANCE) {
            return { cords: [r, c] };
          }
        }
      }
    }
  }

  // Put a random cell
  const availableCells = [];
  for (let r = 0; r < size; r += 1) {
    for (let c = 0; c < size; c += 1) {
      if (board[r][c] === null) {
        availableCells.push([r, c]);
      }
    }
  }

  if (availableCells.length !== 0) {
    return {
      cords: availableCells[Math.floor(Math.random() * availableCells.length)],
    };
  }

  return null;
};

const createEmptyBoard = (size: number) => {
  return Array.from({ length: size }, () => Array(size).fill(null));
};

export { findWinner, findTheBestMove, createEmptyBoard };
