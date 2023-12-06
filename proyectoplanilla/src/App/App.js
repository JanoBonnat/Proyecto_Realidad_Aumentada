import React from 'react';
import './App.css';
import { useState } from 'react';

//Importando componentes.
import { Login } from '../components/Login';
import { Home } from "../components/Home";

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

<<<<<<< HEAD
  
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase){
      setUsuario(usuarioFirebase);
    }
    else{
      setUsuario(null);
    }
  })
=======
>>>>>>> f033581c76c734be51934a3f7e662437f5e4c429

  return (
        <div className='container mt-2'>
          {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
        </div>
<<<<<<< HEAD

=======
        
>>>>>>> f033581c76c734be51934a3f7e662437f5e4c429
  );

}

export default App;