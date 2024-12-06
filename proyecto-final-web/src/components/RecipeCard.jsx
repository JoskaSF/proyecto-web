import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth"; // Importa getAuth desde Firebase
import appFirebase from '@/firebase/firebaseConfig';

const RecipeCard = ({ name, ingredients, image, instructions }) => {
    const [showInstructions, setShowInstructions] = useState(false);
    const [usuarioID, setUsuarioID] = useState(null); // Estado para almacenar el usuarioID

    const toggleInstructions = () => {
        setShowInstructions(!showInstructions); // Alterna el estado de visibilidad
    };

    // Obtén el usuarioID cuando el componente se monte
    useEffect(() => {
        const auth = getAuth();
        if (auth.currentUser) {
            setUsuarioID(auth.currentUser.uid); // Establece el usuarioID si el usuario está autenticado
        } else {
            console.log('No hay usuario autenticado');
        }
    }, []); // El array vacío [] asegura que solo se ejecute una vez al montar el componente

    return (
        <div className='w-auto h-auto rounded-xl display flex flex-col justify-center items-center bg-[#A1D8A4] p-5 m-10'>
            {/* Nombre de la receta */}
            <div className='w-auto flex text-center text-black font-semibold justify-center text-2xl'>{name}</div>
            <div className='text-black font-semibold my-1'>Ingredientes:</div>
            <div className="p-2 bg-[#b7ecb9] flex flex-wrap text-justify rounded-2xl my-5">
                <p>{ingredients.join(', ')}</p>
            </div>
            <div className='flex justify-items-center'>
                <img src={image} alt={name} style={{ width: '20vw', height: '27vh' }} />
            </div>
            {showInstructions && (
                <>
                    <div className='text-black font-semibold my-6'>Instrucciones:</div>
                    <p style={{ whiteSpace: 'pre-line' }} className='bg-[#b7ecb9] p-2 rounded-2xl text-justify'>
                        {instructions}
                    </p>
                </>
            )}
            <button onClick={toggleInstructions} className='mt-5 w-32 h-10 bg-[#beff0a] rounded-2xl'>
                {showInstructions ? 'Ocultar' : 'Ver más'}
            </button>
        </div>
    );
};

export default RecipeCard;
