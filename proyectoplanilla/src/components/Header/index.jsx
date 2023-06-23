import React from 'react';
import './header.css';
import { Button } from 'C:/proyectoplanilla/proyectoplanilla/src/components/Button';
/*import imagenes from '../assets/imagenes';*/
/*import coraje from 'C:/proyectoplanilla/proyectoplanilla/src/assets/img/coraje.jpg';*/
/*import imagenes from 'C:/proyectoplanilla/proyectoplanilla/src/assets/imagenes.js';*/
const Header = () => {

    return (
        /*agregamos estilos al header*/
       <div style={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'top',
        width: '100%',
        height: '600px',
        /*background-color: #023877;*/
        backgroundColor: '#FFE900',
       }}>
            <div style={{
                display: 'flex',
                alignItems: 'right',
                marginTop: '20px',
                marginRight: '100px',
                width: '200px',
                height: "30px",
            }}>
            <Button />
            <Button />
            <Button />
         </div>
       </div>
    );
    /*return(
    <header>
        <div className='header__superior'>
            <div className='logo'>
                <img src={imagenes.img2} alt="logo" className='imagen'/>
                <h1>REALIDAD AUMENTADA</h1>
            </div>
            <div className='search'>
                <input type='search' placeholder='¿Qué desea buscar?'/>
            </div>
        </div>
        <div className='container__menu'>
            <div className='menu'>
                <nav>
                    <ul>
                        <li><a href='pen' id='selected'></a></li>
                        <li><a href='pen'>Servicios</a>
                            <ul>
                                <li><a href='pen'>code</a></li>
                                <li><a href='pen'>code</a></li>
                                <li><a href='pen'>code</a></li>
                                <li><a href='pen'>code</a></li>
                                <li><a href='pen'>code</a></li>
                            </ul>
                        </li>
                        <li><a href='pen'>Escanear</a></li>
                        <li><a href='pen'>Cursos</a></li>
                        <li><a href='pen' className='ingresar'>Iniciar Sesión</a></li>
                        <li><a href='pen' className='ingresar' id='registro'>Registrarse</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    </header>
    )*/
}

export { Header };