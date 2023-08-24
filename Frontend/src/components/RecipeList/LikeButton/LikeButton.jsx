import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { auth } from '../../../helpers/auth.helpers';
function LikeButton({ recipeId, initialIsLiked, initialLikesCount }) {
    const [isLiked, setIsLiked] = useState(initialIsLiked);
    const [likesCount, setLikesCount] = useState(initialLikesCount);
  
//   useEffect(() => {
//     fetchLikeStatus();
//   }, [recipeId]);

  const fetchLikeStatus = async () => {
    try {
      const headers = auth().headers; 
      console.log('Headers:', headers);
  
      const response = await axios.get(`http://localhost:8000/api/recipes/${recipeId}/is-liked`, headers);
      setIsLiked(response.data.isLiked);
    } catch (error) {
      console.error('Error fetching like status:', error);
    }
  };

//   const handleLike = async () => {
//     try {

//       if (isLiked) {
//         await axios.post(`http://localhost:8000/api/recipes/${recipeId}/unlike`);
//                 console.log("hello");

//       } else {
//         await axios.post(`http://localhost:8000/api/recipes/${recipeId}/like`);
//       }

//       const updatedResponse = await axios.get(`http://localhost:8000/api/recipes/${recipeId}/is-liked`);
//       setIsLiked(updatedResponse.data.isLiked);
    
//       if (updatedResponse.data.likes_count !== undefined) {
//         setLikesCount(updatedResponse.data.likes_count);
//       }
//     } catch (error) {
//       console.error('Error toggling like:', error);
//     }
const handleLike = async () => {
    try {
      const headers = auth().headers;
    //   console.log('Headers:', headers);

      if (isLiked) {
        await axios.post(`http://localhost:8000/api/recipes/${recipeId}/unlike`, headers);
      } else {
        await axios.post(`http://localhost:8000/api/recipes/${recipeId}/like`, headers);
      }
      
      setIsLiked(!isLiked);
  
      fetchLikeStatus();
    } catch (error) {
      console.error('Error toggling like:', error);
    }
};

  

  return (
    <div>
      <button onClick={handleLike}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>
      <span>Likes: {likesCount}</span>
    </div>
  );
}

export default LikeButton;
