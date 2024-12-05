'use client'
import React from 'react' 
import { db } from '@/firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react';

const SignIn = () => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        try{

            const credenciales = {
                nombre,
                correo,
                password
            };

            // Verificar que no se envie vacio
            if(!nombre || !correo || !password){
                setError('Todos los campos son obligatorios');
                return;
            }

            const docRef = await addDoc(collection(db, 'Usuarios'), credenciales);
            console.log("Se completo el registro del usuario con ID", docRef.id);

            setNombre('');
            setCorreo('');
            setPassword('');
            setError('');
        }
        catch (e) {
            console.log('Error al enviar los datos', e);
            setError('Hubo un error al guardar los datos');
        }
    }


  return (
    <div className=''>
      <h1>Sign In</h1>
      <form className='' onSubmit={enviar}>
        <div className='flex flex-col'>
            {/* Entrada de nombre de usuario */}
            <label htmlFor="">Usuario:</label>
            <input 
                type="text" 
                placeholder='Ingresa tu usuario'
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}/>
            {/* Entrada de correo electronico */}
            <label htmlFor="">Correo:</label>
            <input 
                type="email" 
                placeholder='Ingresa tu correo'
                value={correo}
                onChange={(e)=>setCorreo(e.target.value)}/>
            {/* Entrada de contraseña */}
            <label htmlFor="">Contraseña:</label>
            <input 
                type="password" 
                placeholder='Ingresa tu contraseña'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            {/* Boton de confirmar */}
        </div>
        
        {/* Mostrar un error si no se llenaron los campos */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div>
            <button type='submit'>SigIn</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
