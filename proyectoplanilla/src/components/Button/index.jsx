import React from 'react';

function Button (){
    //constante para los estilos del botón
    const ButtonStyle = { 
        width: '80px',
        height: 'inherit',
        /*display: 'flex',
        alignItems: 'center',
        textAlign: 'center',*/
        padding: '20px 50px',
        textTransform: 'uppercase',
        fontSize: '14px',
        transition: 'all 300ms ease',
        color: 'black',
        backgroundColor: 'blue',
        border: '1px solid black',
    }



    return(
        <div className="buttonContainer" style={{ //Estilos del contenedor del botón

        }}>
            <a href="pen" style={ButtonStyle}


        >Hola</a> {/*Contenido del botón*/} 
        </div>
    );
} 
export { Button };