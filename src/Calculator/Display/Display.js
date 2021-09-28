import React from 'react';
import './Display.css';

export default function Display({displayValue}) {
    const numFormat = Intl.NumberFormat('en-GB')
    return (
        <div className="display">{numFormat.format(displayValue)}</div>
    )
}
