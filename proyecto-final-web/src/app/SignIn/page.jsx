'use client'
import React from 'react'
import Link from 'next/link'
import { db } from '@/firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react';
import { MdFoodBank } from "react-icons/md";

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
        <div className='w-screen relative'>
            <img src="/images/signBg.webp" alt="Kitchen" className='absolute inset-0 h-screen w-screen object-cover'/>
            <div className='absolute sign_cristal rounded-r-[30px] w-32 h-20 top-16 left-0 z-50'>
                <Link href={'/'} className='h-full flex justify-end items-center'><img src="/images/Logo.png" alt="recetitas" className='rounded-full h-[70%] mr-5'/></Link>
            </div>
            <div className='absolute w-[40vw] max-h-screen min-h-screen right-0 p-5 sign_cristal rounded-l-[30px] flex flex-col overflow-hidden'>
                <h1 className='text-white text-[3rem] font-mono flex justify-center items-center'>Sign In<MdFoodBank className='ml-4 text-[4rem]'/></h1>
                <form className='' onSubmit={enviar}>
                    <div className='flex flex-col'>
                        {/* Entrada de nombre de usuario */}
                        <label className='text-white ml-10 mb-2 text-[1.2rem] font-semibold'>Usuario:</label>
                        <input
                            type="text"
                            placeholder='Ingresa tu usuario'
                            value={nombre}
                            onChange={(e)=>setNombre(e.target.value)}
                            className='p-2 text-white bg-black bg-opacity-50 rounded-xl'/>
                        {/* Entrada de correo electronico */}
                        <label className='text-white ml-10 mb-2 mt-8 text-[1.2rem] font-semibold'>Correo:</label>
                        <input
                            type="email"
                            placeholder='Ingresa tu correo'
                            value={correo}
                            onChange={(e)=>setCorreo(e.target.value)}
                            className='p-2 text-white bg-black bg-opacity-50 rounded-xl'/>
                        {/* Entrada de contraseña */}
                        <label className='text-white ml-10 mb-2 mt-8 text-[1.2rem] font-semibold'>Contraseña:</label>
                        <input
                            type="password"
                            placeholder='Ingresa tu contraseña'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className='p-2 text-white bg-black bg-opacity-50 rounded-xl'/>
                        {/* Boton de confirmar */}
                    </div>
                
                    {/* Mostrar un error si no se llenaron los campos */}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='flex flex-col items-end'>
                        <Link href={'/Home'} className='text-gray-300 my-1 mr-10'>Ya tengo un cuenta.</Link>
                        <button type='submit' className='text-black bg-white p-2 w-32 rounded-xl my-5 mr-10'>Crear Usuario</button>
                    </div>
                </form>
                <p className='text-white text-[1.5rem] font-mono flex justify-center'>Bienvenidos a Recetitas !!!</p>
                <div className='w-full flex justify-center my-auto'>
                    <div className='bg-red-400 w-[45%] aspect-square relative flex overflow-hidden'>
                        <img src="/images/test1.png" alt="Prueba" className='h-full w-full object-cover carrusel'/>
                        <img src="/images/test2.png" alt="Prueba" className='h-full w-full object-cover carrusel'/>
                        <img src="/images/test3.png" alt="Prueba" className='h-full w-full object-cover carrusel'/>
                        <img src="/images/test1.png" alt="Prueba" className='h-full w-full object-cover carrusel'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
