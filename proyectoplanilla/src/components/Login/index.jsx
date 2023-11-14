import React, { useRef, useState } from "react";
import { Input } from '../Input';
import { Button } from '../Button';
import { Auth } from '../../firebase/credenciales';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
/*import '../Estilos/style.css';*/

const auth = getAuth(Auth);

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

const Login = () => {
    const correoRef = useRef(null);
    const contraseñaRef = useRef(null);
    const confirmarContraseñaRef = useRef(null);
    const nombreRef = useRef(null); 

    const [registroError, setRegistroError] = useState(null); //Mensaje de error registro.

    /*const validarNombre = () => {
        const nombreUsuario = nombreRef.current?.value;
        if (!expresiones.nombre.test(nombreUsuario)) {
            setRegistroError("El nombre no puede contener números ni caracteres especiales");
            return false;
        } else {
            setRegistroError(null);
            return true;
        }
    };

    const validarInputs = () => {
        return validarNombre();
    };

    const resaltarErrores = () => {
        const inputs = [nombreRef, correoRef, contraseñaRef, confirmarContraseñaRef];
    
        inputs.forEach((input) => {
            if (input.current && !expresiones[input.current.id]?.test(input.current.value)) {
                input.current.style.border = "5px solid #FF0000" ;
            } else {
                input.current.style.border = "1px solid #ced4da"; // Restaurar el estilo por defecto
            }
        });
    };*/

    const funcAutenticacion = async (e, registrando) => {
        e.preventDefault();

        /*if (!validarInputs()) {
            return;
        }*/

        const correo = correoRef.current?.value;
        const contraseña = contraseñaRef.current?.value;
        const confirmarContraseña = confirmarContraseñaRef.current?.value;

        try {
            if (registrando) {

                if (contraseña.length < 8) {
                    setRegistroError("La contraseña debe tener al menos 8 caracteres");
                    return;
                }

                if (contraseña !== confirmarContraseña) {
                    alert("Las contraseñas no coinciden");
                    return;
                }

                await createUserWithEmailAndPassword(auth, correo, contraseña);
                alert(`¡Usuario registrado! ¡Bienvenido, ${correo}!`);
            } 
            
            if (!registrando){
                await signInWithEmailAndPassword(auth, correo, contraseña);
                alert(`¡Bienvenido, ${correo}!`);
            }
        } catch (error) {
            alert(`Error de autenticación: ${error.message}`);
        }
    }

    //ESTILOS PROVISORIOS AHRE.
    const loginStyle = {
        marginBottom: '50px',
        marginTop: '50px',
        border: 'none',
    }


    return (
        < div>
                <div>
                    <form onSubmit={(e) => { e.preventDefault(); /*resaltarErrores();*/ funcAutenticacion(e, true); }} style={loginStyle}>
                        <h1>Registro</h1>
                        {/*<label>Nombre y Apellido</label>
                        <Input
                            placeholder=""
                            id="nombre"
                            ref={nombreRef}
                            onChange={() => validarNombre()}
    />*/}
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
                <div >
                    <form onSubmit={(e) => { e.preventDefault(); /*resaltarErrores();*/ funcAutenticacion(e, false); }}>
                        <h1>Login</h1>
                        <label>Correo</label>
                        <Input placeholder="" id="correo" ref={correoRef} />
                        <label>Contraseña</label>
                        <Input placeholder="" type="password" id="contraseña" ref={contraseñaRef} />
                        <br></br>
                        <Button type="submit" className="boton">Inicia Sesión</Button>
                    </form>
                </div>
                {/*<div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="hidden" id="login">Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button className="hidden" id="register">Sign Up</button>
                        </div>
                    </div>
    </div>*/}
        </div>
    );
}

export { Login };
