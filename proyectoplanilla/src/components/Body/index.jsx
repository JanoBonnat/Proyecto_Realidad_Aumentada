import React from 'react';
import { Header } from 'C:/proyectoplanilla/proyectoplanilla/src/components/Header';

const Body = () => {
    return (
        /*Estilos del contenedor de la pantalla de principal*/ 
        <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            
           }}>
            {/*Estilos de la pantalla principal*/}
            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'top',
            width: '300px',
            height: '600px',
            /*background-color: #023877;*/
            backgroundColor: '#FFE900',
           }}>
                <Header />
             </div>
        </div>
    )
}

export { Body };


