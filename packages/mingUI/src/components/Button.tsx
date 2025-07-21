import React from 'react';
import PropTypes from 'prop-types';

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

// PropTypes 定义应该在组件声明之后
Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
    onClick: PropTypes.func,
    default: PropTypes.oneOf(['button', 'submit', 'reset', undefined]),
};



export {
    Button,
    myButtonPropDef,
    types,
    ButtonProps
};