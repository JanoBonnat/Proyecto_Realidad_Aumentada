import React, {useState} from 'react';
/*import { Header } from '../Header';*/
import { Button } from '../Button';
import { getAuth, signOut } from 'firebase/auth';
<<<<<<< HEAD
import QRCode from 'react-qr-code';

=======
/*import '../Home/style.css'*/
const auth = getAuth();
{/*
>>>>>>> f033581c76c734be51934a3f7e662437f5e4c429
const auth = getAuth();

const Home = ({correoUsuario}) => {

    const [isMenuActive, setIsMenuActive] = useState(false);
    const toggleMenu = (active) => {
        setIsMenuActive(active);
    }
*/}
{/*
    return (
        <div className='body'>                             {/*contenedor de la pantalla de principal.*/}
          {/*  <div className='body'>    */}                       {/*pantalla principal.*/}
               {/* <Header toggleMenu={toggleMenu} />    */}       {/*Se llama al componente header. */}
                {/*<div className='estilomenu'> {/**Menu. */}
                   {/* <Button className='logout' onClick={logOut}>
                        LOG OUT
                    </Button>
<<<<<<< HEAD
                    <Button style={ItemsStyle}>
                        Generar Código QR
                    </Button>
                    <Button style={ItemsStyle} />
=======
                    <Button className='estiloitems' />
                    <Button className='estiloitems' />
>>>>>>> f033581c76c734be51934a3f7e662437f5e4c429
                    <h4>Bienvenido {correoUsuario}</h4>
                    <QRCode value='hey' />
                </div>                
             </div>
        </div>
    )
}
*/}
{/*export { Home };*/}

const logOut = async () => {
  try {
      await signOut(auth);
  }catch (error) {
      console.error('Error al cerrar sesión', error);
  }
}

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={toggleMenu}>Inicio</a>
          <a href="#servicios" onClick={toggleMenu}>Servicios</a>
          <a href="#nosotros" onClick={toggleMenu}>Nosotros</a>
          <a href="#contacto" onClick={toggleMenu}>Contacto</a>
        </div>
        <div className="icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <Button onClick={logOut}/>
      </div>
    );
  };
  

export { Home };


