import React from "react";
import Post from './Post';
import './PostList.css';
import PropTypes from 'prop-types';

const PostList = props => {
  // const [selectedPost, setSelectedPost] = useState({post:{board_id: null, post_id: null, message:'', like_count:''}});

  return (
    <section id="post-list">
    {props.posts.map( post => 
      <Post key={post.post_id} 
        providerid={post.board_id} 
        post_id={post.post_id} 
        message={post.message} 
        votes={post.votes} 
        onDeleteCard={props.onDeleteCard}
        onVoteCard={props.onVoteCard} 
      />
    )}
    </section>
  );
};
export default PostList;

Post.propTypes = {
  id: PropTypes.number.isRequired,  
  message: PropTypes.string.isRequired,
  votes: PropTypes.string.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onVoteCard: PropTypes.number.isRequired
};