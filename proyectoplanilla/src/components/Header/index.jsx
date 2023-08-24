import React,  {useState} from 'react';
import { Button } from '../Button';

const Header = () => {

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    }

    const HeaderStyle = {
        width: '100%',
        height: '50px',
        backgroundColor: 'red'
    }

    const menuButton = {
        display: 'flex',
        flexDirection: 'column',
        width: '3rem',
        height: '3rem',
        border: '0',
        background: 'transparent',
        gap: '.65rem',
        padding: '10px 10px 10px 10px',
    }

    const divContainer = {
            backgroundColor: 'black',
            height: '2px',
            width: '120%',
            borderRadius: '5px',
            transition: 'all .5s',
            transformOrigin: 'left',
            /*transform: isButtonClicked ? 'rotate(45deg)' : 'none',*/
    }

   const div1 = isButtonClicked 
   ? {
        ...divContainer,
        transform: 'rotate(45deg)',
   }
   : divContainer;

   const div2 = isButtonClicked 
   ? {
        ...divContainer,
        opacity: '0',
   }
   : divContainer;

   const div3 = isButtonClicked 
   ? {
        ...divContainer,
        transform: 'rotate(-45deg',
   }
   : divContainer;







    return (
        <div style={HeaderStyle}>
            <div>
                <Button className="menu-button" style={menuButton} onClick={handleButtonClick}>
                        <div className="div-menu1" style={{divContainer, div1}}></div>
                        <div className="div-menu2" style={{divContainer, div2}}></div>
                        <div className="div-menu3" style={{divContainer, div3}}></div>
                </Button>
            </div>
        </div>
    );
}

export { Header };