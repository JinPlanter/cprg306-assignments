"use client";
import { useState, useEffect } from "react";


function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    


    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            if (data && data.meals) {
                setMeals(data.meals);
            } else {
                setMeals([]);}
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchMealIdeas(ingredient);
      }, [ingredient]);


    return (
        <div>
            <h1>Meal Ideas for {ingredient}</h1>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} > {meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}
export default MealIdeas;