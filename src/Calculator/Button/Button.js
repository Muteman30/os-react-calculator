import React from 'react';
import './Button.css';

export default function Button(props) {
    let classNames = 'calc-button';
    if(props.isActive){
        classNames+=' active'
    }
    return (
        <button
            className={classNames}
            onClick={(e)=>props.operation(props.label)}
            id={'calc-'+props.id}
        >
            {props.label}
        </button>
    )
}
