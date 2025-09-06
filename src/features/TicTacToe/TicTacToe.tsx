import { MouseEvent, useEffect, useMemo, useState } from 'react';

import { cn } from 'shared/lib';

import {
  createEmptyBoard,
  findTheBestMove,
  findWinner,
} from './lib/findWinner';

const boardSize = 3;

const TicTacToe = () => {
  const [board, setBoard] = useState<Array<number | null>[]>(
    createEmptyBoard(boardSize),
  );

  const [winningCords, setWinningCords] = useState<number[][]>([]);
  const [isXTurn, setIsXTurn] = useState(true);

  const isWinner = winningCords.length !== 0;
  const isDraw = useMemo(
    () => board.flat().every(Boolean) && !isWinner,
    [board, isWinner],
  );

  const makeMove = (cors: number[]) => {
    const [r, c] = cors;

    const clonedBoard = board.map(row => row.slice());
    clonedBoard[r][c] = isXTurn ? 0 : 1;

    return clonedBoard;
  };

  const resetBoard = () => {
    setBoard(createEmptyBoard(boardSize));
    setIsXTurn(true);
    setWinningCords([]);
  };

  const handleCellClick = (
    _: MouseEvent<HTMLButtonElement>,
    rowIndex: number,
    columnIndex: number,
  ) => {
    const newBoard = makeMove([rowIndex, columnIndex]);
    setBoard(newBoard);

    const cords = findWinner(newBoard, boardSize);

    if (cords.length !== 0) {
      setWinningCords(cords);
      return;
    }

    setIsXTurn(p => !p);
  };

  useEffect(() => {
    if (isXTurn || isWinner) {
      return;
    }

    setTimeout(() => {
      const bestMove = findTheBestMove(board, boardSize, false);

      if (!bestMove) {
        return;
      }

      const newBoard = makeMove(bestMove.cords);
      setBoard(newBoard);

      if (bestMove.winCords) {
        setWinningCords(bestMove.winCords);
        return;
      }

      setIsXTurn(p => !p);
    }, 500);
  }, [isXTurn]);

  return (
    <table className="w-full text-gray-400/60 h-[500px] table-fixed">
      <tbody>
        {board.map((row, rowIndex) => {
          return (
            <tr key={rowIndex} className="not-last:border-b border-gray-500">
              {row.map((column, columnIndex) => {
                const isWinningCell = winningCords.some(
                  ([wr, wc]) => rowIndex === wr && columnIndex === wc,
                );

                const playerValue = column === 0 ? 'X' : 'O';

                return (
                  <td
                    key={columnIndex}
                    className="not-last:border-r border-gray-500 relative p-0"
                  >
                    <button
                      type="button"
                      disabled={column !== null || isWinner || !isXTurn}
                      className={cn(
                        'w-full h-full font-semibold',
                        'flex items-center justify-center',
                        'transition-colors duration-300',
                        {
                          'text-white': isWinningCell,
                        },
                      )}
                      aria-label={`Row ${rowIndex + 1} Column ${columnIndex + 1}`}
                      onClick={event =>
                        handleCellClick(event, rowIndex, columnIndex)
                      }
                    >
                      <span className="whitespace-break-spaces font-extrabold text-4xl">
                        {column == null ? ' ' : playerValue}
                      </span>
                    </button>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { TicTacToe };
