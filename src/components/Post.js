import React, { useState, useEffect }   from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import PostList from './PostList'

const axios = require('axios');


const Post = (props) => {

    const[message, setMessages] = useState([]);
    
    const getMessages = () => {
        axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/providers/${props.provider_id}/users/${props.user_id}/posts`)
        .then( response => {
            console.log(response.data);
                if (response.data.length > 0 ){
                    console.log(response.data)
                setMessages(response.data);
            }
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => console.log("Tried to get your messages"));  
    }
    useEffect( () => {
        getMessages();
    }, []);

    const addMessage = ({message}) => {
        axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/providers/${props.provider_id}/users/${props.user_id}/posts`, {message})
        .then( response => {
            console.log(response.data);
            getMessages();
        })
    }

    const onDeleteButtonClick = event => {
        props.onDeleteCard(props.post_id);
    }
    // const onVoteButtonClick = event => {
    //     props.onVoteCard(props.post_id, 1);
    // }


    return (
        <div className="post">
            <h3>Message: {props.message}</h3>
            <div className="post-buttons">
                {/* <button className="post-button" onClick={onVoteButtonClick}>💜: {props.votes}</button> */}
                <button className="post-button" onClick={onDeleteButtonClick}> Delete </button>
                {/* <button onCllick={}>Submit</button> */}
            </div>
            <div> <PostList /></div>
        </div>
    );
};

Post.propTypes = {
    message: PropTypes.string.isRequired,
    onDeleteCard: PropTypes.func.isRequired,
    onVoteCard: PropTypes.func.isRequired,
    getMessages: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired

};

export default Post;
