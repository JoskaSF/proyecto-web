import React from 'react'
import Link from 'next/link'

const SideBar = () => {
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
            <Link href={'/'}>Cerrar Sesion</Link>
        </aside>
    )
}   
export default SideBar         