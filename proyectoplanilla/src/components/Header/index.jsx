import React,  {useState} from 'react';
import { Button } from '../Button';

const Header = ({toggleMenu}) => {

    const [isButtonClicked, setIsButtonClicked] = useState(false); /*isButtonClicked = false*/

    const handleButtonClick = () => { /**Esta función se ejecutará cuando se haga clic en el botón */
        setIsButtonClicked(!isButtonClicked); /**setButtonClicked es una función que actualiza el estado del botón */
        toggleMenu(!isButtonClicked);
    }

    const HeaderStyle = { /*Estilos del Header*/ 
        width: '100%',
        height: '70px',
        backgroundColor: 'red',
        top: '10px',

    }

    const menuButton = { /*Estilos del botón*/ 
        display: 'flex',
        flexDirection: 'column',
        width: '40px',
        height: '48px',
        border: 'none',
        background: 'transparent',
        gap: '.58rem',
        cursor: 'pointer',
        margin: '20px 0 0 15px'
    }


    const divContainer = { /*Estilos de los palos del menú*/
            backgroundColor: 'black',
            height: '5px',
            width: '100%',
            borderRadius: '50px',
            transition: 'all .3s',
            transformOrigin: 'left',
            /*transform: isButtonClicked ? 'rotate(45deg)' : 'none',*/
    }

   const div1 = isButtonClicked /*Esta variable define el estilo del primer palo*/ 
   ? {                          
        ...divContainer, /**Se está utilizando el operador de propagación (...) para copiar los estilos del objeto divContainer existente. */
        transform: 'rotate(45deg)', /*Si isButtonClicked es "true", entonces se aplican los estilos entre llaves*/
         
   }
   : divContainer; /**Sino, se aplica el estilo definido de divContainer */

   const div2 = isButtonClicked 
   ? {
        ...divContainer,
        opacity: '0',
        width: '0',
   }
   : divContainer;

   const div3 = isButtonClicked 
   ? {
        ...divContainer,
        transform: 'rotate(-45deg)',
   }
   : divContainer;

    return (
        <div style={HeaderStyle}>
                <Button className="menu-button" style={menuButton} onClick={handleButtonClick}>
                        <div className="div-menu1" style={div1}></div>
                        <div className="div-menu2" style={div2}></div>
                        <div className="div-menu3" style={div3}></div>
                </Button>
        </div>
    );
}

export { Header };