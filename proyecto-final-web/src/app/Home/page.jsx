'use client'
import React, {useState} from 'react'
import ComidasPage from '@/components/ComidasPage';
import LoginPage from '../LogIn/page';
import appFirebase from '@/firebase/firebaseConfig';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
const auth = getAuth(appFirebase);


const HomePage = () => {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <div>
      {usuario ? <ComidasPage correoUsuario = {usuario.email}/> : <LoginPage/>}
    </div>

  );
};

export default HomePage