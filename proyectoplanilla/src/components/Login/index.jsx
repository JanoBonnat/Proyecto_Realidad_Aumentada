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
    const [correoError, setCorreoError] = useState(false);
    const [contraseñaError, setContraseñaError] = useState(false);
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);



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
                    setLoginError('Debes llenar los campos.');
                    setCorreoError(!correo);
                    setContraseñaError(!contraseña);
                    return;
                }

                if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-email') {
                    // Verificar si el correo tiene el formato correcto antes de restablecer el estado de error
                    if (correo && !correo.includes('@')) {
                        setCorreoError(true);
                        setLoginError('Ese formato de correo no es el adecuado.');
                        setTimeout(() => setErrorMessageVisible(true), 10); /**Se hace visible el mensaje de error */
                    } else {
                        setCorreoError(true);
                        setLoginError('El correo ingresado no es el correcto');
                        setTimeout(() => setErrorMessageVisible(true), 10);
                    }
                }
        
                if (error.code === 'auth/wrong-password') {
                    setLoginError('Contraseña incorrecta. Por favor, verifica tu contraseña e inténtalo de nuevo.');
                    setCorreoError(false);
                    setContraseñaError(true);
                    setTimeout(() => setErrorMessageVisible(true), 10); 
                }
        
                if (error.code === "auth/missing-password") {
                    setLoginError('Debes ingresar una contraseña');
                    setCorreoError(false);
                    setContraseñaError(true); 
                    setTimeout(() => setErrorMessageVisible(true), 10);
                }
        
                if (error.code === "auth/invalid-login-credentials") {
                    setLoginError("El correo o contraseña son inválidos. Inténtelo de nuevo.");
                    setCorreoError(true); 
                    setContraseñaError(true); 
                    setTimeout(() => setErrorMessageVisible(true), 10);
                }
        
                if (error.code === "auth/too-many-requests") {
                    setLoginError("La cuenta ha sido bloqueada debido a demasiados intentos de inicio de sesión. Inténtalo de nuevo más tarde.");
                    setCorreoError(true); 
                    setContraseñaError(true);
                    setTimeout(() => setErrorMessageVisible(true), 10); 
                }
            }
        }
    }

    const handleCorreoChange = () => {
        setCorreoError(false);
    };
    
    const handleContraseñaChange = () => {
        setContraseñaError(false);
    };
    

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
                    <form onSubmit={(e) => { funcAutenticacion(e, false); }}>
                        <h1 className="h1Poderoso">Login</h1>
                        <br></br>
                        <div className="inputContainer">
                            <div className="correoPoderoso">
                                <label className="labelPoderoso">Correo</label>
                            </div>
                            <Input
                                placeholder=""
                                id="correo"
                                ref={correoRef}
                                inputClassName={` ${correoError ? 'error' : ''}`}
                                onChange={handleCorreoChange}
                            />
                            <i class="fas fa-check-circle"></i>
			                <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <label>Contraseña</label>
                        <Input
                            placeholder=""
                            type="password"
                            id="contraseña"
                            ref={contraseñaRef}
                            inputClassName={` ${contraseñaError ? 'error' : ''}`}
                            onChange={handleContraseñaChange}
                        />
                        <br></br>
                        <Button type="submit" className="boton">Inicia Sesión</Button>
                        <div className="errorContainer">
                            <p className={`errorMessage ${errorMessageVisible ? 'visible' : ''}`}>{loginError}</p>
                        </div>
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