import React, { useState } from 'react'
import './tictactoe.css'

const Tictactoe = () => {

    const [board, setBoard] = useState(Array(9).fill(''))
    const [move, setMove] = useState('X')
    const [winner, setwinner] = useState('');
    const [winnerX, setwinnerX] = useState(0);
    const [winnerO, setwinnerO] = useState(0);



    const click = (n) => {

        let square = [...board]

        // if someone already clicked!
        if (board[n] !== '') {
            alert('Already Clicked')
            return
        }


        square[n] = move
        setBoard(square)

        // check the index value
        if (move === 'X') {
            setMove('O')
        } else {
            setMove('X')
        }


        // checkWin and show alert
        if (checkWin(square)) {

            setwinner(move);
            if (move === 'X') {
                setwinnerX(winnerX + 1);
            } else {
                setwinnerO(winnerO + 1)
            }

            setTimeout(() => {

                alert("Winner is " +move)
                square.fill('');
            }, 500);
            // setBoard(square)
        }

        // checkDraw and show alert
        if (checkDraw(square)) {
            alert("Match Draw")
            setwinnerX(winnerX + 1);
            setwinnerO(winnerO + 1)
            square.fill('');
            // setBoard(square)
        }

    }


    // draw logic
    const checkDraw = (board) => {
        let count = 0;
        board.forEach(element => {
            if (element !== '') {
                count++;
            }
        });

        if (count >= 9) {
            return true;
        } else {
            return false;
        }
    }


    // win logic
    const checkWin = (board) => {
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        let flag = false;
        conditions.forEach(element => {
            if (board[element[0]] !== '' && board[element[1]] !== '' && board[element[2]] !== '') {
                if (board[element[0]] === board[element[1]] && board[element[1]] === board[element[2]]) {
                    flag = true;
                }
            }
        });
        return flag;
    }
    // const style = move === "X" ? 'x' : 'o';
    return (
        <>
            <div className='text-center'>
                <h1 style={{ color: 'white' }}>TIC TAC TOE</h1>
                <h4 style={{ color: 'white' }}>Player {move} please move</h4>
                <h4 style={{ color: 'white' }}>Current_Winner =  {winner} </h4>
                <h4 style={{ color: 'white' }}>X win count =  {winnerX} </h4>
                <h4 style={{ color: 'white' }}>O win count =   {winnerO} </h4>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td
                            // className={style}
                            onClick={() => { click(0) }}
                        >
                            {board[0]}
                        </td>
                        <td
                            // className={style}
                            onClick={() => { click(1) }}
                        >
                            {board[1]}
                        </td>
                        <td
                            // className={style}
                            onClick={() => { click(2) }}
                        >
                            {board[2]}
                        </td>
                    </tr>
                    <tr>
                        <td
                            // className={style}
                            onClick={() => { click(3) }}
                        >
                            {board[3]}
                        </td>
                        <td
                            // className={style}
                            onClick={() => { click(4) }}
                        >
                            {board[4]}
                        </td>
                        <td
                            // className={style}
                            onClick={() => { click(5) }}
                        >
                            {board[5]}
                        </td>
                    </tr>
                    <tr>
                        <td
                            // className={style}
                            onClick={() => { click(6) }}
                        >
                            {board[6]}
                        </td>
                        <td
                            // className={style}
                            onClick={() => { click(7) }}
                        >
                            {board[7]}
                        </td>
                        <td
                            // className={style}
                            onClick={() => { click(8) }}
                        >
                            {board[8]}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}

export default Tictactoe