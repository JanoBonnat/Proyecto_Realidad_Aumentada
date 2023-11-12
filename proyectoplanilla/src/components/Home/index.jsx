import React, {useState} from 'react';
import { Header } from '../Header';
import { Button } from '../Button';
import { getAuth, signOut } from 'firebase/auth';
import QRCode from 'react-qr-code';


const auth = getAuth();

const Home = ({correoUsuario}) => {

    const [isMenuActive, setIsMenuActive] = useState(false);
    const toggleMenu = (active) => {
        setIsMenuActive(active);
    }

    const centrarBody = { /**Esilos para centrar el body */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }
    const bodyStyle = { 
        /**Estilos del body */
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        height: '600px',
        /*background-color: #023877;*/
        backgroundColor: '#FFE900',
        boxShadow: '0 0 15px black'
    }

    const menuStyles = { /**Estilos del menu */
        /*display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',*/
        height: '100%',
        /*width: isMenuActive ? '110%' : '0',*/
        backgroundColor: 'blue',
        transition: 'all .3s',
        transformOrigin: 'right',
        transform: isMenuActive ? 'translateX(0)' : 'translateX(110%)',
        overflow: 'hidden',
        width: '110%',
        left: '-110%',
    }

    const ItemsStyle = { /**Estilos de los botones */ 
        backgroundColor: 'orange',
        height: '40px',
        width: '90%',
        overFlow: 'hidden',
        cursor: 'pointer',
        transition: 'all .2s',
        border: '1px solid',
        margin: '10px 0',
    }

    const logOut = async () => {
        try {
            await signOut(auth);
        }catch (error) {
            console.error('Error al cerrar sesión', error);
        }
    }


    return (
        <div style={centrarBody}>                             {/*contenedor de la pantalla de principal.*/}
            <div style={bodyStyle}>                           {/*pantalla principal.*/}
                <Header toggleMenu={toggleMenu} />            {/*Se llama al componente header. */}
                <div style={menuStyles}> {/**Menu. */}
                    <Button style={ItemsStyle} onClick={logOut}>
                        LOG OUT
                    </Button>
                    <Button style={ItemsStyle}>
                        Generar Código QR
                    </Button>
                    <Button style={ItemsStyle} />
                    <h4>Bienvenido {correoUsuario}</h4>
                    <QRCode value='hey' />
                </div>                
             </div>
        </div>
    )
}

export { Home };

