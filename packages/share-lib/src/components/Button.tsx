import React from 'react';
import Proptypes from 'prop-types';




const types = ['button', 'submit', 'reset'] as const;

interface ButtonProps<T> {
    text: string;
    type: T;
    onClick?: () => void;
    default?: T | undefined,
}

const myButtonPropDef: ButtonProps<(typeof types)[number]> = {
    text: 'test',
    type: 'button',
    onClick: () => { },
    default: undefined as (typeof types)[number] | undefined,
}


const Button: React.FC<ButtonProps<(typeof types[number])>> = (
    {
        text,
        type,
        onClick,
        default: defaultType,
    }) => {
    return (
        <button
            type={type ?? defaultType ?? 'button'}
            onClick={onClick} >
            {text}
        </button>
    )
}

export default Button;