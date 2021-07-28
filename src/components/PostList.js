import React, { useState, useEffect } from "react";
import Post from './Post';
// import './PostList.css';
import PropTypes from 'prop-types';

const axios = require('axios');


const filterPosts = (posts, subset) => {
  if (subset==='all') {
      return posts;
  }
  console.log("glue", posts)
  console.log("mustard", subset)

  return posts.filter((post) => {

    // const username = post.username.toLowerCase();
    // const userCheck = (!query || username.includes(query))

    const idCheck = (subset==='all' || post.user_id.includes(subset))
    
    return idCheck
  });
}

const PostList = (props) => {

  const[posts, setPosts] = useState([]);
  const[subset, setSubset] = useState('all');
  
  const[makeNewPost, setMakeNewPost] = useState(false);
  console.log("fries", props)

  const getPosts = () => {
      axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/posts`)
      .then(response => {
          console.log(process.env.REACT_APP_BACKEND_URL);
          let getFilteredMessages = [];
          if (props.user) {
            getFilteredMessages = response.data.filter( (message) => {
              return props.user.user_id === message.user_id
            })
          } else if (props.provider) { 
            getFilteredMessages = response.data.filter( (message) => {
              return props.provider.provider_id === message.provider_id
            })
          }
          setPosts(getFilteredMessages);
          console.log(posts)
      })
      .catch(error => {
          console.log(error)
      })
      .finally(() => console.log("Tried to get posts"));  
  }
  
  useEffect( () => {
      if (!props.provider && !props.user) {
        return
      }
      getPosts();
  }, []);


  const onNewPostButtonClick  = event => {
  setMakeNewPost(true);
  }

  const addPost = ({message}) => {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/providers/${props.provider_id}/users/${props.user_id}/posts`,{message})
      .then( response => {
          console.log(response.data);
          getPosts();
      })
      .catch(error => console.log(error))
      .finally('Tried to upload your information')
  }
  
  const onPostSelect = (event) => {
      // if event.target.value = all then dont filter!
      const subset = event.target.value
      
      setSubset(subset)
  }

  // const [searchQuery, setSearchQuery] = useState('');
  const filteredPosts = filterPosts(posts, subset);

  return (
    <section id="post-list">
      <h4>Check your messages:</h4>
        <select className=" transparent_btn submit-btn post-list-select" value={subset} onChange={onPostSelect}>
          <option value="all">all</option>
      </select>
      
      <div>
        {filteredPosts.map( post => 
          <Post 
            key={post.post_id} 
            post_id={post.post_id}
            provider={post.provider_id} 
            message={post.message}
            addPosts={addPost} 
            onDeleteCard={post.onDeleteCard}
            // votes={post.votes} 
            // onVotePost={props.onVotePost} 
          // onClick={() => history.push('/Products')}
          />
        )}
      </div>
    </section>
  );
};

export default PostList;

