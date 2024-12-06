'use client'
import React from 'react';
import Link from 'next/link'
import { useState } from 'react';
import { auth } from '@/firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar que los campos no se envien vacios
    if (!correo || !password) {
      setError("Ingresar todos los campos!");
      return;
    }

    try {
      const credencialUsuario = await signInWithEmailAndPassword(auth, correo, password);
      const usuario = credencialUsuario.user;

      // Si se verifica correctamente los datos
      alert(`El usuario ${usuario} a ingresado con exito!`);

      // Limpiar los campos despues de ingresar
      setCorreo('');
      setPassword('');
      setError('');
    } catch (e) {
      // Si no se pudo acceder
      setError('Error al intentar ingresar', e);
    }
    setError('');
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
              id="username"
              value={correo}
              name="username"
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
              value={password}
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href={'/SignIn'} className='flex justify-end text-gray-500 hover:text-gray-600'>Registrarse</Link>
          </div>
          
          {/* Mostrar un error si no se llenaron los campos */}
          {error && <p className='text-[#FF0000] mb-[2%]'>{error}</p>}

          <button
            type="submit" formMethod='POST'
            className="w-full py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
