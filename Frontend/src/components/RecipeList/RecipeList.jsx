import './RecipeList.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import LikeButton from './LikeButton/LikeButton';
import RecipeDetails from '../Comment/RecipeDetails';
import CommentsModal from '../Comment/CommentsModal';


function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null); 

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

    const handleShowComments = (recipeId) => {
        setSelectedRecipeId(recipeId);
    };

    
  const handleAddComment = newComment => {
  };


    return (
        <div className="recipe-list">
            <h1 className='text-2xl italic'>Recipes</h1>
            <div className="recipe-cards">
                {recipes.map(recipe => (
                    <div className="recipe-card" key={recipe.id}>
                        <img className="recipe-image" src={recipe.image} alt={recipe.name} />
                        <div className="recipe-details">
                            <h2 className='text-lg text-slate-700 italic te hover:text-orange-500 animate-pulse'>{recipe.name}</h2>
                            {/* <p>Cuisine: {recipe.cuisine}</p>
                            <p>Ingredients: {recipe.ingredients}</p> */}
                            <div className="social-buttons">
                                <FacebookShareButton url={window.location.href}>
                                    <div className="SocialMediaShareButton bg-blue-500">
                                        <FontAwesomeIcon icon={faFacebook}className='text-2xl text-white' />
                                    </div>
                                </FacebookShareButton>
                                <TwitterShareButton url={window.location.href}>
                                    <div className="SocialMediaShareButton bg-white">
                                        <FontAwesomeIcon icon={faTwitter} className='text-2xl text-blue-400'/>
                                    </div>
                                </TwitterShareButton>
                                <WhatsappShareButton url={window.location.href} >
                                    <div className="SocialMediaShareButton bg-green-500">
                                        <FontAwesomeIcon icon={faWhatsapp} className='text-2xl text-white'/>
                                    </div>
                                </WhatsappShareButton>
                            </div>
                            {/* <LikeButton
                                recipeId={recipe.id}
                                initialIsLiked={false}
                                initialLikesCount={recipe.likes_count}
                            />
                              <button onClick={() => handleShowComments(recipe)}>Show Comments</button>

                            <button onClick={() => handleShowComments(recipe.id)}>Show Comments</button>
                        </div>
                        {selectedRecipeId === recipe.id && <RecipeDetails recipeId={recipe.id} />} */}
                    </div>
                    </div>
                 ))}
                     {/* {selectedRecipe && (
        <CommentsModal
          comments={selectedRecipe.comments}
          onClose={() => setSelectedRecipe(null)}
          onAddComment={handleAddComment}
        />
        
      )} */}
            </div>
        </div>
    );
}

export default RecipeList;
