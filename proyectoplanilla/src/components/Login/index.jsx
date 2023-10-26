import React, { useRef } from "react";
import { Input } from '../Input';
import { Button } from '../Button';

import { Auth } from '../../firebase/credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(Auth);

const Login = () => {;
    const correoRef = useRef(null);
    const contraseñaRef = useRef(null);

    const funcAutenticacion = async (e) => {
        e.preventDefault();

        const correo = correoRef.current?.value;
        const contraseña = contraseñaRef.current?.value;

        try {
            await signInWithEmailAndPassword(auth, correo, contraseña);
            alert(`¡Bienvenido, ${correo}!`);
        } catch (error) {
            alert("El correo o contraseña son inválidos");
        }
    }
    // INICIO ESTILOS.
    const padre = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const bodyStyle = {
        width: '600px',
        height: '300px',
        backgroundColor: '#FFE900',
        boxShadow: '0 0 15px black',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const submitStyle = {
        marginTop: '10px',
        width: '100px',
        height: '40px',
        border: '1px solid black',
        borderRadius: '3px',
    }
    // FIN ESTILOS.

    return (
        <div style={padre}>
            <div style={bodyStyle}>
                <form onSubmit={funcAutenticacion}>
                    <label>Correo</label>
                    <Input placeholder="" id="email" ref={correoRef}/>
                    <label>Contraseña</label>
                    <Input placeholder="" type="password" id="contraseña" ref={contraseñaRef}/>
                    <Button style={submitStyle} type="submit" className="boton">Inicia Sesión</Button>
                </form>
                <Button to="../Register/index.jsx">Registrate gato</Button>
            </div>
        </div>
    );
}

export { Login };
