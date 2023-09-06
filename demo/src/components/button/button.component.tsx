import React from 'react';
import './button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick: Function;
}

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button className="button" onClick={() => onClick()}>
            {children}
        </button>
    );
};
