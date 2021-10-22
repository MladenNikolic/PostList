import React from 'react';
import PostContext from './PostContext';
import axios from 'axios';

const PostState = (props) => {
  let [contextPosts, setContextPost] = React.useState('loading');//here I save a posts array into state so I can use it later in app
  let [contextCurrentPost, setContextCurrentPost] = React.useState('loading');

  React.useEffect(() => {
    axios
      .get('https://dummyapi.io/data/v1/post?limit=873', {
        headers: {
          'app-id': '6171bf1cbc806d422eed4396',
        },
      })
      .then((response) => {
        setContextPost(response.data.data);
      });
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts: contextPosts,
        setPost: setContextPost,
        currentPost: contextCurrentPost,
        setCurrentPost: setContextCurrentPost
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
