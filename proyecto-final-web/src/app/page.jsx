import React from 'react'
import Link from 'next/link'

const MainPage = () => {
  return (
    <div className='max-w-[100vw] max-h-[100vh]'>
      <div className='sticky top-0 h-[12vh] w-screen bg-[#41B149] shadow-xl z-50 flex items-center justify-between'>
        <div className='flex flex-row h-full justify-center items-center ml-[3%]'>
          <img src="/images/Logo.png" alt="Recetas"  className='rounded-full max-h-[65%]'/>
          <p className='text-white ml-[10%] font-serif text-[120%]'>Recetitas</p>
        </div>
        <Link href={'/LogIn'} className='mr-[5%] border-b-2 border-r-2 border-green-900 bg-[#38ab40] hover:bg-[#93da98] p-2 rounded-xl'>Iniciar Sesion</Link>
      </div>
      <div className='min-w-[100vw] min-h-[88vh] overflow-clip relative flex items-center justify-center'>
        <img src="/images/bgMain.png" alt="Meal Background" className='absolute top-0 left-0 z-0 opacity-40 animacion_main_background object-fill'/>
        <div className='bg-white w-[70vw] h-[200%] absolute left-30 rotate-[20deg] shadow-2xl overflow-hidden'>
          <img src="/images/meal3D.png" alt="Meal Banner" className='relative rotate-[-20deg] top-[25%] left-[53%] w-[45%]'/>
          <h1 className='absolute bottom-[53%] left-[15%] text-[4.5rem] font-serif rotate-[-20deg]'>Recetitas</h1>
          <h2 className='absolute bottom-[44%] left-[9%] text-[1.5rem] rotate-[-20deg] font-mono font-bold'>Tu recetario inteligente:</h2>
          <h2 className='absolute bottom-[41%] left-[3%] text-[1.3rem] rotate-[-20deg] font-mono'>Organiza, encuentra y cocina con facilidad.</h2>
          <h3 className='absolute bottom-[35%] left-[6%] text-[0.9rem] rotate-[-20deg] font-mono'>Categoriza y organiza tus recetas por ingredientes, tiempo y más.</h3>
          <Link href={'/SignIn'}>
            <div className='absolute bottom-[26%] left-[15%] bg-green-300 p-4 rounded-2xl shadow-2xl rotate-[-20deg]'>Empezar ahora!</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage
