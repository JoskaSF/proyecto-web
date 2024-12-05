import React from 'react'
import Link from 'next/link'
import { AiFillFire } from "react-icons/ai"

const MainPage = () => {
  return (
    <div className='relative max-w-[100vw] max-h-[100vh] overflow-hidden'>
      <div className='sticky top-0 min-h-[12vh] w-screen bg-[#41B149] shadow-xl z-50 flex items-center justify-end'>
        <Link href={'/LogIn'} className='mr-[5%]'>Iniciar Sesion</Link>
      </div>
    </div>
  )
}

export default MainPage
