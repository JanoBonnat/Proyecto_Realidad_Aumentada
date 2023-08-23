import React from 'react';
import '../Menu/menu.css';

const Button = ({children, className, style}) => {
    return (
            <button className={className} style={style}>
                {children}
            </button>
    );
}

export { Button };
