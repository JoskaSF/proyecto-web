'use client'
import React, { useState } from 'react';
import { getAuth, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import appFirebase from '@/firebase/firebaseConfig';
import Link from 'next/link';
const auth = getAuth(appFirebase);

const FormChangeCredentials = () => {
    const [email, setEmail] = useState(''); // Aquí almacenaremos el correo antiguo
    const [password, setPassword] = useState(''); // Aquí almacenaremos la contraseña antigua
    const [newEmail, setNewEmail] = useState(''); // Aquí almacenaremos el nuevo correo
    const [newPassword, setNewPassword] = useState(''); // Aquí almacenaremos la nueva contraseña
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChangeEmail = async (e) => {
        e.preventDefault();

        // Verificamos que se ingresen los campos
        if (!newEmail || !password) {
            setError('Por favor, ingresa la contraseña y el nuevo correo');
            return;
        }
        
        setLoading(true);
        const user = auth.currentUser;

        try {
            const credenciales = EmailAuthProvider.credential(user.email, password);
            await reauthenticateWithCredential(user, credenciales);

            // Cambiar el correo utilizando el nuevo correo (newEmail)
            await updateEmail(user, newEmail);  // Aquí estaba el error, estaba usando `email` en lugar de `newEmail`
            setError('');
            alert('Correo electrónico actualizado correctamente');
        }
        catch (error) {
            console.error("Error al cambiar el correo:", error); // Aquí mostramos el error detallado
            setError(`Error al cambiar el correo: ${error.message}`); // Mostrar el mensaje de error en la UI
        }
        setLoading(false);
    };

    // CAMBIAR CONTRASEÑA
    const handleChangePassword = async (e) => {
        e.preventDefault();

        // Verificamos que se ingresen los campos
        if (!newPassword || !password) {
            setError('Por favor, ingresa la contraseña y la nueva contraseña');
            return;
        }
        
        setLoading(true);
        const user = auth.currentUser;

        try {
            const credenciales = EmailAuthProvider.credential(user.email, password);
            await reauthenticateWithCredential(user, credenciales);

            // Cambiar la contraseña utilizando `newPassword`
            await updatePassword(user, newPassword);  // Cambié el password por `newPassword`
            setError('');
            alert('Contraseña actualizada correctamente');
        }
        catch (error) {
            console.error("Error al cambiar la contraseña:", error); // Mostrar el error detallado
            setError(`Error al cambiar la contraseña: ${error.message}`); // Mostrar el mensaje de error en la UI
        }
        setLoading(false);
    };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='p-10 rounded-2xl shadow-2xl'>
        <h2 className='text-[1.5rem] font-semibold mb-5'>Actualizar Datos de la Cuenta</h2>
        <form onSubmit={handleChangeEmail} className='space-y-5'>
          <div className='flex flex-col'>
              <label>Contraseña actual</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 p-1 rounded-xl border-[#276d2b]"
                placeholder="Ingresa tu contraseña actual"
              />
          </div>
          <div className='flex flex-col'>
              <label htmlFor="">Nuevo email:</label>
              <input
                type="email"
                id="newEmail"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="border-2 p-1 rounded-xl border-[#276d2b]"
                placeholder="Ingresa tu nuevo correo electrónico"
              />
          </div>
          <div className='flex flex-col'>
              <button
                  type="submit"
                  className="w-full py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  disabled={loading}
                  >
                  {loading ? 'Actualizando...' : 'Cambiar Correo'}
              </button>
          </div>
        </form>
      
        <form onSubmit={handleChangePassword}>
          <div className="my-4 flex flex-col  ">
              <label htmlFor="password" >Contraseña actual:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 p-1 rounded-xl border-[#276d2b]"
                placeholder="Ingresa tu contraseña actual"
              />
          </div>
          <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Nueva contraseña:</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border-2 p-1 rounded-xl border-[#276d2b] w-full"
                placeholder="Ingresa tu nueva contraseña"
              />
          </div>
          <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                disabled={loading}
              >
                {loading ? 'Actualizando...' : 'Cambiar Contraseña'}
              </button>
          </div>
          <div className="mb-4">
              <Link href={"/Home/Account"} className='p-2 rounded-xl bg-green-700 text-white'>Volver</Link>
          </div>
        </form>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
}

export default FormChangeCredentials;
