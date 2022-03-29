import React from "react";
import {ReactComponent as CloseSvg} from "../../assets/images/close.svg";
import {ReactComponent as CircleSvg} from "../../assets/images/circle.svg";
import {SquareValue} from "../../types";
import './styles.css'

interface Props {
    isWinner: boolean
    value: SquareValue
    onClick: () => void
}

export const Square = ({onClick, value, isWinner = false}: Props) => {
    const dimensions = {
        width: 40,
        height: 40
    };

    return (
        <button className={`square ${isWinner ? 'is-winner' : ''}`} onClick={onClick}>
            {value === 'X' && <CloseSvg style={{...dimensions, strokeWidth: 3}} viewBox='2 2 20 20' />}
            {value === 'O' && <CircleSvg style={{...dimensions, stroke: '#FFDE03', strokeWidth: 4 }} viewBox='0 0 36 36' />}
        </button>
    );
}
