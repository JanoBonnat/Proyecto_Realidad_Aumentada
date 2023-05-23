import React from 'react';
import './header.css';
/*import imagenes from '../assets/imagenes';*/
/*import coraje from 'C:/proyectoplanilla/proyectoplanilla/src/assets/img/coraje.jpg';*/
/*import imagenes from 'C:/proyectoplanilla/proyectoplanilla/src/assets/imagenes.js';*/

function Header(){
    return(
    <header>
        <div className='header__superior'>
            <div className='logo'>
                {/*<img src={imagenes.img2} alt="logo" className='imagen'/>*/}
                <h1>ZERO</h1>
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
                        <li><a href='pen'>Blog</a></li>
                        <li><a href='pen'>Cursos</a></li>
                        <li><a href='pen'>Nosotros</a></li>
                        <li><a href='pen'>Contactos</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    </header>
    )
}

export { Header };