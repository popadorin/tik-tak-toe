import React, {useEffect, useState} from 'react'
import {Board} from "../Board";
import {calculateWinner} from "./calculateWinner";
import {SquareValue, Winner} from "../../types";
import './styles.css'

export const TikTakToe = () => {
    const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [winner, setWinner] = useState<Winner | null>(null);

    useEffect(() => {
        const winner = calculateWinner(squares)
        if (winner) {
            setWinner(winner)
        }
    }, [squares])

    const handleClick = (squareIndex: number) => {
        const tempSquares = [...squares];
        if (squares[squareIndex] || winner) {
            return;
        }
        tempSquares[squareIndex] = xIsNext ? "X" : "O";
        setSquares(tempSquares)
        setXIsNext(prevState => !prevState)
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    winnerLine={winner?.line}
                    squares={squares}
                    onClick={squareIndex => handleClick(squareIndex)}
                />
            </div>
        </div>
    );
}
