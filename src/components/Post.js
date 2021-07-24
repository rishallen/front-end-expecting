import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';


const Post = (props) => {
    const onDeleteButtonClick = event => {
        props.onDeleteCard(props.card_id);
    }
    const onVoteButtonClick = event => {
        props.onVoteCard(props.card_id, 1);
    }
    
    return (
        <div className="post">
            <h3>Message: {props.message}</h3>
            <div className="post-buttons">
                <button className="post-button" onClick={onVoteButtonClick}>🥭: {props.votes}</button>
                <button className="post-button" onClick={onDeleteButtonClick}> Delete </button>
            </div>
        </div>
    );
};

Post.propTypes = {
    message: PropTypes.string.isRequired,
    onDeleteCard: PropTypes.func.isRequired,
    onVoteCard: PropTypes.func.isRequired
};

export default Post;
