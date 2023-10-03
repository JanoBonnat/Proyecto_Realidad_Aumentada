import './App.css';
import { useState } from 'react';

//Importando componentes.
import { Login } from '../components/Login';
import { Home } from "../components/Home";

//importando módulos de firebase.
import { appFirebase }  from '../firebase/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase);



function App() {

  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase){
      setUsuario(usuarioFirebase);
    }
    else{
      setUsuario(null);
    }
  })

  return (
        <div className='container mt-2'>
          {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
        </div>
  );
}

export default App;
