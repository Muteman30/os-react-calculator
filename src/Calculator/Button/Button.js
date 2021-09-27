import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <div className="calc-button">
            {props.value}
        </div>
    )
}
