import React from 'react';
import '../Menu/menu.css';

const Button = (/*{content}*/) => {
    return (
                <button className='menu-button'>
                    {/**{content}*/}
                    <div className="div-menu1" ></div>
                    <div className="div-menu2" ></div>
                    <div className="div-menu3" ></div>
                </button>
    );
}

export { Button };
