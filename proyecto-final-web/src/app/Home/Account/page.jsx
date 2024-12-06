'use client'
import React from 'react';
import Link from 'next/link';
import SideBar from '@/components/SideBar';
import { GiFullPizza } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from '@/firebase/firebaseConfig';
const auth = getAuth(appFirebase);

const AccountPage = () => {
    // Almacenar la informacion
    const [usuario, setUsuario] = useState(null);
    // Manejar la carga
    const [loading, setLoading] = useState(true);

    console.log('Se va a autenticar')
    useEffect(() => {
        const noAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsuario(user); // Lo almacenamos
                console.log('Se autenticó')
            } else {
                setUsuario(null) // se marca como null porque no esta autenticado
                console.log('No se autenticó')
            }
            setLoading(false)
        });
        return () =>noAuth();
    }, []);

    if (loading) {
        return <GiFullPizza className='text-[#41B149] spin text-[6rem] relative top-[50%] left-[50%]'/>
    }

    return (
        <div className='flex flex-row'>
            <SideBar/>
            <div className='w-[80vw] h-screen flex flex-col justify-center items-center'>
                <div className='bg-white p-6 rounded-2xl shadow-2xl'>
                    <h2>Informacion de la cuenta</h2>
                    { usuario ? (
                        <div className='mb-5'>
                            <p><strong>Correo:</strong>{usuario.email}</p>
                            <p><strong>Id:</strong>{usuario.uid}</p>
                            {/* Contraseña no se muestra por security */}
                        </div>
                    ):(
                        <p><strong>NO ESTAS AUTENTICADO!</strong></p>
                    )}
                    <Link href={"../Home/Account/FormChangeCredentials"} className='bg-[#41B149] text-white p-2 rounded-xl'>Actualizar</Link>
                </div>
            </div>
        </div>
    );
};

export default AccountPage
