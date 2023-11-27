import React, { useRef, useState } from "react";
import { Input } from '../Input';
import { Button } from '../Button';
import { Auth } from '../../firebase/credenciales';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './style.css';

const auth = getAuth(Auth);

const Registro = ({ onRegistroSuccess }) => {
    const correoRef = useRef(null);
    const contraseñaRef = useRef(null);
    const confirmarContraseñaRef = useRef(null);

    const [registroError, setRegistroError] = useState(null);

    const funcRegistro = async (e) => {
        e.preventDefault();

        const correo = correoRef.current?.value.trim();
        const contraseña = contraseñaRef.current?.value;
        const confirmarContraseña = confirmarContraseñaRef.current?.value;

        try {
            if (contraseña.length < 8) {
                setRegistroError("La contraseña debe tener al menos 8 caracteres");
                return;
            }

            if (contraseña !== confirmarContraseña) {
                setRegistroError("Las contraseñas no coinciden");
                return;
            }

            await createUserWithEmailAndPassword(auth, correo, contraseña);
            onRegistroSuccess(correo); // Llamamos a la función proporcionada desde el componente principal
        } catch (error) {
            console.error("Error de registro:", error);
            setRegistroError(`Error de registro: ${error.message}`);
        }
    }

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={funcRegistro}>
                <h1>Registro</h1>
                <label>Correo</label>
                <Input placeholder="" id="correo" ref={correoRef} />
                <label>Contraseña</label>
                <Input placeholder="" type="password" id="contraseña" ref={contraseñaRef} />
                <label>Confirmar contraseña</label>
                <Input placeholder="" type="password" id="confirmarContraseña" ref={confirmarContraseñaRef} />
                <br></br>
                <Button type="submit" className="boton">Registrarse</Button>
                <p style={{ color: 'red' }}>{registroError}</p>
            </form>
        </div>
    );
}

export { Registro };
