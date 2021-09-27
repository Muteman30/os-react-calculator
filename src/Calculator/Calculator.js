import React from 'react';
import './Calculator.css';
import Display from './Display/Display';
import Controls from './Controls/Controls';
import Button from './Button/Button'

export default function Calculator(props) {
    return (
        <div className="calculator">
            <Display />
            <Controls>
                <Button/>
            </Controls>
        </div>
    )
}
