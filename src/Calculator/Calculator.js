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
    const buttons = [
        {label: 'AC', id:'ac'},
        {label: 'C', id:'c'},
        {label: '+/-', id:'plusminus'},
        {label: '', id:''},
        {label: 1, id:1},
        {label: 2, id:2},
        {label: 3, id:3},
        {label: '+', id:'add'},
        {label: 4, id:4},
        {label: 5, id:5},
        {label: 6, id:6},
        {label: '-', id:'subtract'},
        {label: 7, id:7},
        {label: 8, id:8},
        {label: 9, id:9},
        {label: 'X', id:'multiply'},
        {label: 0, id:0},
        {label: '.', id:'decimal'},
        {label: '=', id:'equal'},
        {label: '/', id:'divide'}
    ];

    const [state, dispatch] = useReducer(slotReducer,initialState);

    return (
        <div className="calculator">
            <Display displayValue={state.slots[1]===undefined?state.slots[0]:state.slots[1]}/>
            <Controls>
                {buttons.map((b, index)=> {
                    const activeClass = state.activeOperation === b.label;
                    return <Button
                        key={index}
                        id={b.id}
                        isActive={activeClass}
                        label={b.label}
                        operation={dispatch}/>
                })}
            </Controls>
        </div>
    )
}
