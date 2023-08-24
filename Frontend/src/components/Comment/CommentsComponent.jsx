import React, { useState, useEffect } from 'react';
function CommentsComponent({ recipeId }) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    async function fetchComments() {
      try {
        const response = await fetch(`http://localhost:8000/api/recipes/${recipeId}/comments`);
        const data = await response.json();
        console.log('Fetched comments:', data);
        setComments(data.comments);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
  
    useEffect(() => {
      fetchComments();
    }, [recipeId]);
  
    if (isLoading) {
      return <p>Loading comments...</p>;
    }
  
    return (
      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p className='font-bold font-serif bg-green-300 '> {comment.user.name}:</p>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

export default CommentsComponent;
