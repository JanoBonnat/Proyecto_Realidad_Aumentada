import React, { useState } from "react";
import { Input }  from '../Input';
import { Button } from '../Button';

import { appFirebase }  from '../../firebase/credenciales';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from 'firebase/auth';
const auth = getAuth(appFirebase);


const Login = () => {

    const [registrando, setRegistrando] = useState(false);

    const funcAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.contraseña.value;
        console.log(correo);
        console.log(contraseña)
    }

    //INICIO ESTILOS.
    const padre = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
       
    }

    const bodyStyle = { /**Estilos del body */
        width: '600px',
        height: '300px',
        /*background-color: #023877;*/
        backgroundColor: '#FFE900',
        boxShadow: '0 0 15px black',
        textAlign:'center',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const submitStyle = {
        marginTop: '10px',
        width: '100px',
        height: '40px',
        content: 'Enviar',
        border:'1px solid black',
        borderRadius:'3px',
    }
    

    //FIN ESTILOS.

    return(
        <div style={padre}>
            <div style={bodyStyle}>
                <form onSubmit={funcAutenticacion}>
                    <label>Nombre</label>
                    <Input placeholder="" id="email"/>
                    <label>Apellido</label>
                    <Input placeholder="" id="contraseña"/>
                    <Button style={submitStyle}>{registrando ? "Registrate" : "Inicia Sesión"}</Button>
                    <h4>{registrando ? "Si ya tienes una cuenta" : "No tienes una cuenta"}</h4>
                    <Button style={submitStyle} onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia Sesión" : "Registrate"}</Button>
                </form>
            </div>
        </div>
    )
}

export { Login };