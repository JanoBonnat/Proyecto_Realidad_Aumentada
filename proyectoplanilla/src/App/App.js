import React from 'react';
import { useState } from 'react';

//Importando componentes.
import { Login } from '../components/Login';
import { Home } from "../components/Home";
import { ShowProducts } from '../components/ShowProducts/ShowSproducts';

//importando módulos de firebase.
import { Auth }  from '../firebase/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const auth = getAuth(Auth);



function App() {

    const [usuario, setUsuario] = useState(null);

    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            setUsuario(usuarioFirebase);
        } else {
            setUsuario(null);
        }
    })


  return (
        <div className='container mt-2'>
          {usuario ? <ShowProducts correoUsuario = {usuario.email} /> : <Login/>}
        </div>
        
  );

}

export default App;