import React, { useRef, useState } from "react";
import { Input } from '../Input';
import { Button } from '../Button';
import { Auth } from '../../firebase/credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './style.css';

const auth = getAuth(Auth);

const Login = () => {
    const correoRef = useRef(null);
    const contraseñaRef = useRef(null);
    const confirmarContraseñaRef = useRef(null);
    const containerRef = useRef(null); // referencia al contenedor
    const signInEmailRef = useRef(null);
    const signUpEmailRef = useRef(null);

    const [registroError, setRegistroError] = useState(null); //Mensaje de error registro.



    const funcAutenticacion = async (e, registrando) => {
        e.preventDefault();

        const correo = correoRef.current?.value;
        const contraseña = contraseñaRef.current?.value;
        const confirmarContraseña = confirmarContraseñaRef.current?.value;
        

        try {
            
            //INICIO DE SESIÓN.
            if (!registrando){
                await signInWithEmailAndPassword(auth, correo, contraseña);
                alert(`¡Bienvenido, ${correo}!`);
            }
            //END INICIO DE SESIÓN.

            //REGISTRO
            if (registrando) {

                if (contraseña.length < 8) {
                    setRegistroError("La contraseña debe tener al menos 8 caracteres");
                    return;
                }

                if (contraseña !== confirmarContraseña) {
                    setRegistroError("Las contraseñas no coinciden");
                    return;
                }

                await createUserWithEmailAndPassword(auth, correo, contraseña);
                alert(`¡Usuario registrado! ¡Bienvenido, ${correo}!`);
            } 
            //END REGISTRO.

        } catch (error) {
            setRegistroError(`Error de autenticación: ${error.message}`);
            return;
        }
    }

    //ESTILOS PROVISORIOS AHRE.
    const loginStyle = {
        marginBottom: '50px',
        marginTop: '50px',
        border: 'none',
    }

    const openSignIn = () => {
        containerRef.current.classList.remove("right-panel-active");
        if (signUpEmailRef.current && signUpEmailRef.current.value !== "") {
            signInEmailRef.current.value = signUpEmailRef.current.value;
        }
    };

    const openSignUp = () => {
        containerRef.current.classList.add("right-panel-active");
        if (signInEmailRef.current && signInEmailRef.current.value !== "") {
            signUpEmailRef.current.value = signInEmailRef.current.value;
        }
    };
    


    return (
        < div className="container" id="container" ref={containerRef}>
                <div className="form-container sign-in-container">
                    <form onSubmit={(e) => { e.preventDefault();  funcAutenticacion(e, false); }}>
                        <h1>Login</h1>
                        <label>Correo</label>
                        <Input placeholder="" id="correo" ref={correoRef} />
                        <label>Contraseña</label>
                        <Input placeholder="" type="password" id="contraseña" ref={contraseñaRef} />
                        <br></br>
                        <Button type="submit" className="boton">Inicia Sesión</Button>
                    </form>
                </div>
                <div className="form-container sign-up-container">
                    <form onSubmit={(e) => { e.preventDefault();  funcAutenticacion(e, true); }} style={loginStyle}>
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
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={openSignIn}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp" onClick={openSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export { Login };