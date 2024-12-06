'use client'
import React, {useEffect, useState} from 'react'
import RecipeCard from '@/components/RecipeCard'
import SideBar from '@/components/SideBar'
import { GiFullPizza } from "react-icons/gi";

const HomePage = () => {
  const [meals, setMeals] =  useState([]); //Aqui se almacenan las meals, en un array
  const [loading, setLoading] =  useState(true); 
  const [categoria, setCategoria] = useState("");
  const [options, setOptions] = useState([]);

  const handleChange = (event) => {
    setCategoria(event.target.value);
  };

  useEffect(() => {
    const fetchOptions = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await response.json();
            setOptions(data.categories || []); // Maneja posibles resultados nulos
        } catch (error) {
            console.error('Error al cargar las opciones:', error);
        }
    };
    fetchOptions();
  }, []);

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
      <SideBar/>
      <main className="flex-1 p-6 overflow-y-auto">
        <select onChange={handleChange} defaultValue="" className='bg-gray-200 rounded-2xl p-2'>
            <option value="" disabled>
                Selecciona una categoria
            </option>
            {options.map((option) => (
                <option key={option.idCategory} value={option.strCategory}>
                    {option.strCategory}
                </option>
            ))}
        </select>
        {loading ?(
          <div className='mt-[40vh] flex items-center justify-center gap-4 text-[2.5rem]'>
            <GiFullPizza className='text-[#41B149] spin text-[6rem]'/>
            <p>Esperando Categoria...</p>
          </div> 
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
    </div>

  );
};

export default HomePage