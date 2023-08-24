import React from 'react';
import CommentsComponent from './CommentsComponent';

function RecipeDetails({ recipeId }) {
  return (
    <div>
      <h1>Recipe Details</h1>
      
      <h2>Comments</h2>
      <CommentsComponent recipeId={recipeId} />
    </div>
  );
}

export default RecipeDetails;
