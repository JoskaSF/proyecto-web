import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';
import { useRouter } from 'next/navigation';

const SideBar = () => {
    const [cliente, setCliente] = useState(false);
    // Vamos a redirigir al usuario
    const router = useRouter();

    useEffect(() => {
        setCliente(true);
    }, []);

    const handleLogOut = async () => {
        // Tratar de cerrar sesion
        try {
            // cerrar la autentificacion
            await signOut(auth);
            // Desplegar en consola
            console.log("Se cerró con exito la sesión");
            // redireccion al LogIn
            if (cliente) {
                router.push('/LogIn'); 
            }
        } catch (e) {
            console.log("Error: no se pudo cerrar sesión");
        }
    };

    if (!cliente) {
        return null;
    }

    return (
        <aside className='bg-red-300 h-screen w-[20vw] flex flex-col p-[3%]'>
            <Link href={'/Home'}>Home</Link>
            <Link href={'/Home/History'}>History</Link>
            <Link href={'/Home/Account'}>Account</Link>
            <select name="" id="">
                <option value=""></option>
                <option value="">Opcion 1</option>
                <option value="">Opcion 2</option>
            </select>
            <button onClick={handleLogOut}>Cerrar Sesion</button>
        </aside>
    )
}   
export default SideBar         