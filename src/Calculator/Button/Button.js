import React from 'react';
import './Button.css';

export default function Button(props) {
    const activeClass = props.activeOperation === props.value && props.buttonType==='operation' ? ' active':'';
    return (
        <div className={"calc-button" + activeClass} onClick={(e)=>props.operation(props.value)}>
            {props.value}
        </div>
    )
}
