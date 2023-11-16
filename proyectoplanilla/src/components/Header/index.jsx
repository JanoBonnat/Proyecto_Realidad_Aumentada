import React,  {useState} from 'react';
import { Button } from '../Button';
import { Home } from '../Home';

const Header = () => {
    return (
      <header>
        {/* Otros elementos del encabezado si es necesario */}
        <Home />
      </header>
    );
  };
export { Header };