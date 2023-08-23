import React from 'react';
import './header.css';
import { Button } from '../Button';

const Header = () => {

    const HeaderStyle = {
        width: '100%',
        height: '50px',
        backgroundColor: 'none',

    }

    return (
       <div style={HeaderStyle}>
        <Button />
       </div>
    );
}

export { Header };