import React, { useRef, useState } from "react";
import { Input } from '../Input';
import { Button } from '../Button';
import { Auth } from '../../firebase/credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Registro } from '../Registro'; // Importamos el componente de registro
import './style.css';

const auth = getAuth(Auth);

const Login = () => {


    const correoRef = useRef(null);
    const contraseñaRef = useRef(null);
    const containerRef = useRef(null); // referencia al contenedor
    const signInEmailRef = useRef(null);
    const signUpEmailRef = useRef(null);

    const [loginError, setLoginError] = useState(null); //Mensaje de error registro.



    const funcAutenticacion = async (e, registrando) => {
        e.preventDefault();

        const correo = correoRef.current?.value
        const contraseña = contraseñaRef.current?.value;

        if (!registrando) {
            try {
                // Verificar si el correo existe en la base de datos de Firebase
                const userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);
    
                // El inicio de sesión fue exitoso
                const user = userCredential.user;
                alert(`¡Bienvenido, ${user.email}!`);
            } catch (error) {

                console.error("Error de registro:", error);
                setLoginError(`Error de registro: ${error.message}`);

                if (!correo && !contraseña){
                    setLoginError('Debes llenar los campos');
                }

                if (error.code === 'auth/user-not-found'){
                    setLoginError('El correo ingresado no es el correcto');
                }

                if (error.code === 'auth/wrong-password'){
                    setLoginError('Contraseña incorrecta. Por favor, verifica tu contraseña e inténtalo de nuevo.')
                }

                if (error.code === "auth/missing-password"){
                    setLoginError('Debes ingresar una contraseña');
                }

                if (error.code === "auth/invalid-login-credentials") {
                    setLoginError("El correo o contraseña son inválidos. Inténtelo de nuevo.");
                }

                if (error.code === "auth/too-many-requests"){
                    setLoginError("La cuenta ha sido bloqueada debido a demasiados intentos de inicio de sesión. Inténtalo de nuevo más tarde.");
                }
            }
        }
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
                    <form onSubmit={(e) => { funcAutenticacion(e); }}>
                        <h1>Login</h1>
                        <label>Correo</label>
                        <Input placeholder="" id="correo" ref={correoRef} />
                        <label>Contraseña</label>
                        <Input placeholder="" type="password" id="contraseña" ref={contraseñaRef} />
                        <br></br>
                        <Button type="submit" className="boton">Inicia Sesión</Button>
                        <p style={{ color: 'red', width: '290px'}}>{loginError}</p>
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
                <Registro/>
        </div>
    );
}

export { Login };