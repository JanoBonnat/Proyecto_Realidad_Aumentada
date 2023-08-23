import React from 'react';
import './header.css';
import { Button } from '../Button';

const Header = () => {

    const HeaderStyle = {
        width: '100%',
        height: '50px',
        backgroundColor: 'red',

    }



    return (
       <div style={HeaderStyle}>
        <Button>
            <div className="div-menu1" ></div>
            <div className="div-menu2" ></div>
            <div className="div-menu3" ></div>
        </Button>
       </div>
    );
}

export { Header };