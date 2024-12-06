'use client'
import React from 'react';
import Link from 'next/link';
import SideBar from '@/components/SideBar';
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
        return <div>Cargando...</div>
    }

    return (
        <div className='flex flex-row'>
            <SideBar/>
            <div className='flex flex-col'>
                <h2>Informacion de la cuenta</h2>
                { usuario ? (
                    <div>
                        <p><strong>Correo:</strong>{usuario.email}</p>
                        <p><strong>Id:</strong>{usuario.uid}</p>
                        {/* Contraseña no se muestra por security */}
                    </div>
                ):(
                    <p><strong>NO ESTAS AUTENTICADO!</strong></p>
                )} 
            </div>
            <div>
                <Link href={"../Home/Account/FormChangeCredentials"}>Actualizar</Link>
            </div>
        </div>
    );
};

export default AccountPage
