'use client'
import React from 'react';
import Link from 'next/link'
import { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import appFirebase from '@/firebase/firebaseConfig';
import { useRouter } from 'next/navigation';
const auth = getAuth(appFirebase);

const LoginPage = () => {

  const [registrando, setRegistrando] = useState(false);
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const route = useRouter();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    if (!correo || !contraseña) {
      setError('Por favor ingresa ambos campos');
      return;
    }

    setRegistrando(true);
    setError(''); 

<<<<<<< HEAD
      // Si se verifica correctamente los datos
      alert(`El usuario ${usuario} a ingresado con exito!`);

      // Limpiar los campos despues de ingresar
      setCorreo('');
      setPassword('');
      setError('');
    } catch (e) {
      // Si no se pudo acceder
      setError('Error al intentar ingresar', e);
=======
    try{
      const credencial = await signInWithEmailAndPassword(auth, correo, contraseña);
      console.log('Usuario ingresado:', credencial.user);
      route.push('/Home');
      
    }
    catch (e) {
      let mensajeError = 'No se pudo ingresar';
      switch (e.code) {
        case 'auth/invalid-email':
          mensajeError = 'Correo electrónico inválido';
          break;
        case 'auth/user-not-found':
          mensajeError = 'El usuario no existe';
          break;
        case 'auth/wrong-password':
          mensajeError = 'Contraseña incorrecta';
          break;
        default:
          mensajeError = e.message; // Mostrar mensaje de error genérico
      }
      setError(mensajeError);
      setRegistrando(false);
>>>>>>> 45fe214 (Ya jalo esta vaina)
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="bg-gray-200 bg-opacity-100 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">Inicio de sesión</h2>
        
        <form className='' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Correo:</label>
            <input
              type="text"
              id="correo"
              name="correo"
              value={correo}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Ingresa tu correo"
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className={`${error ? "mb-3" :"mb-6"}`}>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={contraseña}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setContraseña(e.target.value)}
            />
            <Link href={'/SignIn'} className='flex justify-end text-gray-500 hover:text-gray-600'>Registrarse</Link>
          </div>
          
<<<<<<< HEAD
          {/* Mostrar un error si no se llenaron los campos */}
          {error && <p className='text-[#FF0000] mb-[2%]'>{error}</p>}
=======
          {/* Mostrar error si existe */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
>>>>>>> 45fe214 (Ya jalo esta vaina)

          <button
            type='submit'
            disabled={registrando}
            className="w-full py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >{registrando ? "Ingresando..." : "Ingresar"}</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
