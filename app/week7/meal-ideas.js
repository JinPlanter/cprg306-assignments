"use client";

import { useState, useEffect } from "react";
// importing the useState and useEffect functions from the react library.

// API fetching function, that retrieves meal from the API.
async function fetchMealIdeas(ingredient) {
    try {
        console.log(ingredient);
        // fetch and display a list of meal ideas from the "https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}" API based on a selected shopping list item.
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        // makes an asynchronous request to the API endpoint.
        // fetch allows for page updates/changes without reloading the page when called.

        const data = await response.json();
        // pulls data from the response object and returns it as a JSON object.

        
        try {
            // the api returns null if there are no meals found.
            if (data.meals !== null) {
                return data.meals;;
            }
            else {
                return [];
            }
        }
        catch (error) {
            console.error(error);
        }

        /*
        if (data.meals === null) {
            return [];
        }
        else {
            return data.meals;
        }
        */
    }
    catch (error) {
        console.error(error);
    }
    

    /*
    .then((res) => res.json())
    .then((data) => data.meals);
    */
}

/**
 * MealIdeas is a component that will fetch and display a list of meal ideas from the API based on a selected shopping list item.
*/
export default function MealIdeas({ ingredient }) {
    // Defined state variables using useState hook.
    // meals holds the list of meal ideas fetched from the API.
    const [meals, setMeals] = useState([]);
    
    // Define load function
    async function loadMealIdeas() {
        fetchMealIdeas(ingredient).then((meals) => setMeals(meals));
    }
    
    // Use the useEffect hook
    useEffect(() => {
        loadMealIdeas();
        // loadMealIdeas(ingredient).then(setMeals);
    }, [ingredient]);
    // updates the list of meal ideas whenever the ingredient prop changes.
    
    // Render the component
    return (
        <div>
        <h2>Meal Ideas</h2>
        <ul>
            {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
        </ul>
        </div>
    );
}