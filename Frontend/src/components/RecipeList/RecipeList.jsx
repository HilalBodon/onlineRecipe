import './RecipeList.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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


    const handleLike = async (recipeId) => {
        try {
            const response = await axios.post(`http://localhost:8000/api/recipes/${recipeId}/like`);
            if (response.status === 200) {
                const updatedRecipes = recipes.map((recipe) => {
                    if (recipe.id === recipeId) {
                        return { ...recipe, likes: recipe.likes + 1 };
                    }
                    return recipe;
                });
                setRecipes(updatedRecipes);
            }
        } catch (error) {
            console.error('Error liking recipe:', error);
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
                            <div className="social-buttons">
                            <FacebookShareButton url={window.location.href}>
                                <div className="SocialMediaShareButton">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                            </FacebookShareButton>
                            <TwitterShareButton url={window.location.href}>
                                <div className="SocialMediaShareButton">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                            </TwitterShareButton>
                            <WhatsappShareButton url={window.location.href}>
                                <div className="SocialMediaShareButton">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </div>
                            </WhatsappShareButton>
                            </div>
                            {/* <div className="like-button">
                        <button onDoubleClick={() => handleLike(recipe.id)}>
                            {recipe.likes} Likes
                        </button>
                    </div> */}
                    </div>
                    </div>
                )
                )
                }
           
           </div>
        </div>
    );
}

export default RecipeList;



