import React, { useState, useEffect} from 'react';

import { HStack, VStack } from "native-base";

import UserTextInput from './UserTextInput';
import { solve } from '../solver';

const BoardComponents = () => {

    const [board, setBoard] = useState([]);

    const makeInitialBoard = () => {
        const tempBoard = [];
        for (let i = 0; i < 9; i++) {
            const row = []
            for (let j = 0; j < 9; j++) {
                row.push({
                    value: "",
                    id: "entry" + i.toString() + j.toString()
                });
            }
            tempBoard.push(row);
        }
        setBoard(tempBoard);
        solve(tempBoard)
    }
    
    useEffect(() => {
        if(board.length === 0) {
            makeInitialBoard(); 
        }
    })

    return (
        <>
            <HStack>
                {board.map((column, index) => {
                    const row = index;
                    return (
                        <VStack 
                            key={"row" + index}
                            w={{
                                base: "9%",
                                md: "25%",
                            }}
                        >
                            {column.map((entry, index) => {
                                return (
                                    <UserTextInput row={row} col={index} key={entry.id} value={entry.value}/>
                                )
                            })}

                        </VStack>
                    )
                })}   
            </HStack>
        </>
    );
}

export default BoardComponents;


