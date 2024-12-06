'use client'
import React, {useEffect, useState} from 'react'
import RecipeCard from '@/components/RecipeCard'
import SideBar from '@/components/SideBar'

const HomePage = () => {
  const [meals, setMeals] =  useState([]); //Aqui se almacenan las meals, en un array
  const [loading, setLoading] =  useState(true); 

  useEffect(() => {
    const fetchMeals = async () => {
      try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`);
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
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  
  },[]);
  return (
    <div className='flex h-screen'>
      <SideBar/>
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {loading ?(
          <p>Cargando recetas...</p>
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