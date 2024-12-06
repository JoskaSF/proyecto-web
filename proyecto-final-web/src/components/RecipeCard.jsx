import React, {useState} from 'react'

const RecipeCard = ({name, ingredients, image, instructions}) => {
    const [showInstructions, setShowInstructions] = useState(false);

    const toggleInstructions = () => {
        setShowInstructions(!showInstructions); // Alterna el estado de visibilidad
    };
return (
    <div className='w-auto h-auto rounded-xl display fljustify-center items-center bg-slate-500 p-5 m-10'>
        {/* Nombre de la receta */}
        <div className='w-auto flex text-center text-white justify-center text-2xl' >{name}</div>
        <div className='text-white font-semibold my-1'>Ingredientes:</div>
        <div className="bg-white rounded-sm flex flex-wrap text-justify">
            <p>{ingredients.join(', ')}</p>
        </div>  
        <div className='flex justify-items-center'>
            <img src={image} alt={name} style={{width:'20vw', height:'27vh'}} />
        </div>  
        {showInstructions && (
            <>
            <div className='text-white font-semibold my-1' >Instrucciones:</div>
            <p style={{whiteSpace: 'pre-line'}} className='bg-white rounded-sm text-justify' >
                {instructions}</p>
            <button className='m-2 w-20 h-10 bg-orange-500'>Hecha</button>
            </>
        )}        
        
        <button onClick={toggleInstructions} className='m-2 w-20 h-10 bg-orange-500'>
            {showInstructions ? 'Ocultar' : 'Ver más'}
        </button>

    </div>  

    )
}

export default RecipeCard