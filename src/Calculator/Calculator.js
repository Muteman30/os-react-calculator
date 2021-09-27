import React from 'react';
import './Calculator.css';
import Display from './Display/Display';
import Controls from './Controls/Controls';
import Button from './Button/Button'

export default function Calculator(props) {
    const buttons = ['AC','C','±', '' ,1, 2, 3, '+',4,5,6,'-',7,8,9, 'X',0, '.', '=', '/'];
    const slots = [0,0];
    const operation = '';
    return (
        <div className="calculator">
            <Display />
            <Controls>
                {buttons.map((b)=><Button value={b}/>)}
            </Controls>
        </div>
    )
}
