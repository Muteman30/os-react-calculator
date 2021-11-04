import React from 'react';
import './Display.css';

export default function Display({displayValue}) {
    const numFormat =Intl.NumberFormat('en-GB');
    if(displayValue.toString().length > 14){
        displayValue = 'Err'
    } else {
        let split = displayValue.toString().split('.')
        split[0] =  numFormat.format(split[0])
        displayValue = split.join('.');
    }
    return (
        <div className="display">{displayValue}</div>
    )
}
