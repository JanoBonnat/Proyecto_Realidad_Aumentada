import React from 'react';
import { Button } from '../Button';

const Header = () => {

    const HeaderStyle = {
        width: '100%',
        height: '50px',
        backgroundColor: 'red',
    }
    const menuHamburguesa = {
        '.menu-button': {
            display: 'flex',
            flexDirection: 'column',
            width: '3rem',
            height: '3rem',
            border: '0',
            background: 'transparent',
            gap: '.65rem',
            padding: '10px 10px 10px 10px',
        },
        ' .menu-button > div': {
            backgrouncolor: 'black',
            height: '2px',
            width: '120%',      
            borderRadius: '5px',
            transition: 'all .5s',
            transformOrigin: 'left',
        },
        
        ' div:nth-child(2)': {
            transformOrigin: 'left',
            transition: '.4s',
        },
        
        '.menu-button:hover div:first-child': {
            transform: 'rotate(45deg)',
        },
        
        '.menu-button:hover div:nth-child(2)':{
            width: '0',
        },
        
        '.menu-button:hover div:last-child': {
            transform: 'rotate(-45deg)',
        },
    }

    return (
       <div style={HeaderStyle}>
        <Button content={
            <div style={menuHamburguesa}>
                <div className="div-menu" ></div>
                <div className="div-menu" ></div>
                <div className="div-menu" ></div>
            </div>
        } className="menu-button" />
       </div>
    );
}

export { Header };