import React from 'react'
import Link from 'next/link'

const MainPage = () => {
  return (
    <div className='relative max-w-[100vw] max-h-[100vh]'>
      <div className='sticky top-0 min-h-[12vh] w-screen bg-[#41B149] shadow-xl z-50 flex items-center justify-end'>
        <Link href={'/LogIn'} className='mr-[5%]'>Iniciar Sesion</Link>
      </div>

      <img 
        src="/images/background.png" 
        className="absolute top-[-20vh] left-[50%] w-[90%] rotate-[-20deg] z-0"
      />
    </div>
  )
}

export default MainPage
