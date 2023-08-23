import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecipeList.css'

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/recipes');
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div className="recipe-list">
            <h1>Recipes</h1>
            <div className="recipe-cards">
                {recipes.map(recipe => (
                    <div className="recipe-card" key={recipe.id}>
                        <img className="recipe-image" src={recipe.image} alt={recipe.name} />
                        <div className="recipe-details">
                            <h2>{recipe.name}</h2>
                            <p>Cuisine: {recipe.cuisine}</p>
                            <p>Ingredients: {recipe.ingredients}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeList;
