import React from 'react'

const RecipeCard = ({name, ingredients, image, instructions}) => {
  return (
    <div className='w-4/12 h-auto rounded-xl display fljustify-center items-center bg-slate-500 p-5 m-10'>
        {/* Nombre de la receta */}
        <div className='w-auto flex text-center text-white justify-center text-2xl' >{name}</div>
        <div className='text-white font-semibold my-1'>Ingredientes:</div>
        <div className="bg-white rounded-sm flex flex-wrap">
            <p>{ingredients.join(', ')}</p>
        </div>  
        <div className=''>
            <img src={image} alt={name} style={{width:'20vw', height:'27vh'}} />
        </div>          
        <div className='text-white font-semibold my-1 hidden' >Instrucciones:</div>
        <div className='bg-white rounded-sm text-justify hidden' >{instructions}</div>
        <button className='m-2 w-20 h-10 bg-orange-500'>Hecha</button>
        <button className='m-2 w-20 h-10 bg-orange-500'>Ver más</button>

    </div>  

    )
}

export default RecipeCard