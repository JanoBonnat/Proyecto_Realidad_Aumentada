import React from 'react';
import '../Menu/menu.css';

const Button = ({content}) => {
    return (
                <button className='menu-button'>
                    {content}
                </button>
    );
}

export { Button };
