import './RecipeList.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import LikeButton from './LikeButton/LikeButton';

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
                            <LikeButton
                            recipeId={recipe.id}
                            initialIsLiked={false}
                            initialLikesCount={recipe.likes_count}
    />                    </div>
                    </div>
                )
                )
                }
           
           </div>
        </div>
    );
}

export default RecipeList;



