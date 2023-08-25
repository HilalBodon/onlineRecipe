import React, { useState } from 'react';
import Modal from '../Common/Modal';
import CustomInput from '../Inputs/CustomInput';

const CommentsModal = ({ comments, onClose, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <Modal setShow={onClose} className="your-modal-styles">
      <div className="modal-header">Comments</div>
      <div className="modal-content">
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              {comment.content}
            </div>
          ))}
        </div>
        <div className="add-comment">
          <CustomInput
            label="Add a new comment"
            type="text"
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      </div>
    </Modal>
  );
};

export default CommentsModal;
