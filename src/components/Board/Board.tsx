import React from "react";
import {Square} from "../Square";
import {SquareIndex, BoardLine, SquareValue} from "../../types";
import './styles.css'

interface Props {
    squares: SquareValue[]
    onClick: (squareIndex: SquareIndex) => void
    winnerLine?: BoardLine
}

export const Board = ({squares, onClick, winnerLine}: Props) => {
    const renderSquare = (index: SquareIndex) =>
        <Square
            isWinner={!!winnerLine?.includes(index)}
            value={squares[index]}
            onClick={() => onClick(index)}
        />

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}
