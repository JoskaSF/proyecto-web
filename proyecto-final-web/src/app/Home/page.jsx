'use client'
<<<<<<< HEAD
import React, {useEffect, useState} from 'react'
import RecipeCard from '@/components/RecipeCard'
import SideBar from '@/components/SideBar'
import { GiFullPizza } from "react-icons/gi";
=======
import React, {useState} from 'react'
import ComidasPage from '@/components/Comidas';
import LoginPage from '../LogIn/page';
import appFirebase from '@/firebase/firebaseConfig';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
const auth = getAuth(appFirebase);

>>>>>>> bd9c1fb18a99333bfd42e3c8c37e3f4b17a3889e

const HomePage = () => {
<<<<<<< HEAD
  const [meals, setMeals] =  useState([]); //Aqui se almacenan las meals, en un array
  const [loading, setLoading] =  useState(true); 
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    if (!categoria) return;

    const fetchMeals = async () => {
      try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoria}`);
        if (!response.ok){
          throw new Error('Error al obtener las recetas');
        }
        const info = await response.json();

        const mealsWithIngredients = info.meals.map((meal) => {
          // Extrae los ingredientes
          const ingredients = Object.keys(meal)
            .filter((key) => key.startsWith('strIngredient') && meal[key]?.trim())
            .map((key) => meal[key]); // Solo guarda los valores no vacíos

          return { ...meal, ingredients }; // Agrega los ingredientes como un array
        });
        setMeals(mealsWithIngredients);
      }
      catch (error) {
        alert("No hay recetas en esta categoría aun...")
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  
  },[categoria]);
  return (
    <div className='flex h-screen'>
      <SideBar setCategoria={setCategoria}/>
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {loading ?(
          <p>Cargando recetas...</p> //JOSKA MODIFICA ESTE CARGANDO RECETAS
        ) : (
          meals.map((meal) => (
            <RecipeCard
                key={meal.idMeal}
                name={meal.strMeal}
                ingredients={meal.ingredients}// Pasa los ingredientes
                image={meal.strMealThumb}
                instructions={meal.strInstructions}
              />
          ))
        )}
      </main>
=======
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <div>
      {usuario ? <ComidasPage correoUsuario = {usuario.email}/> : <LoginPage/>}
    </div>

  );
};

export default HomePage