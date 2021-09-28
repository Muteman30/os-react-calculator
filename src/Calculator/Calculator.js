import React, {useState, useReducer} from 'react';
import './Calculator.css';
import Display from './Display/Display';
import Controls from './Controls/Controls';
import Button from './Button/Button';
import slotReducer from './operations/reducer';

const initialState = {
    slots:[undefined, 0],
    activeOperation:undefined
}

export default function Calculator() {
    const buttons = ['AC','C','+/-', '' ,1, 2, 3, '+',4,5,6,'-',7,8,9, 'X',0, '.', '=', '/'];
    const [state, dispatch] = useReducer(slotReducer,initialState);

    return (
        <div className="calculator">
            <span>First Slot:{state.slots[0]}</span><br/>
            <span>Active Op: {state.activeOperation}</span><br/>
            <span>Second Slot: {state.slots[1]}</span>
            <Display displayValue={state.slots[1]===undefined?state.slots[0]:state.slots[1]}/>
            <Controls>
                {buttons.map((b)=>(
                    <Button
                        activeOperation={state.activeOperation}
                        value={b}
                        operation={dispatch}/>
                ))}
            </Controls>
        </div>
    )
}
