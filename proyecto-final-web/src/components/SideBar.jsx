import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import appFirebase from '@/firebase/firebaseConfig';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { FaHome, FaHistory,FaUser } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
const auth = getAuth(appFirebase);

const SideBar = () => {
    const router = useRouter();

    const handleLogOut = async () => {
        try {
            await signOut(auth);

            // Desplegar en consola
            console.log("Se cerró con exito la sesión");
            // redireccion al LogIn
            if (cliente) {
                router.push('/LogIn'); 
            }
        } catch (e) {
            console.log("Error: no se pudo cerrar sesión", e);
        }
    };

    return (
        <aside className="bg-[#41B149] h-screen w-[20vw] flex flex-col justify-between p-[3%]">
            <div className='space-y-3 text-[1.3rem]'>
                <Link href={'/'}>
                    <div className='flex flex-row w-full items-center mb-8'>
                        <img src="/images/Logo.png" alt="Recetas" className='rounded-full max-w-[30%]'/>
                        <p className='text-white ml-[5%] font-serif text-[120%]'>Recetitas</p>
                    </div>
                </Link>
                <Link href={'/Home'} className='flex items-center gap-1 border-b-2 border-transparent hover:border-[#276e2c]'><FaHome/>Home</Link>
                <Link href={'/Home/History'} className='flex items-center gap-1 border-b-2 border-transparent hover:border-[#276e2c]'><FaHistory/>History</Link>
                <Link href={'/Home/Account'} className='flex items-center gap-1 border-b-2 border-transparent hover:border-[#276e2c]'><FaUser/>Account</Link>
            </div>
            <button onClick={handleLogOut} className='flex items-center gap-1 mb-10 text-[1.3rem] border-b-2 border-transparent hover:border-[#276e2c]'><IoExit/>Cerrar Sesión</button>
        </aside>
    );
};

export default SideBar;
