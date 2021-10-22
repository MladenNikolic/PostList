import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import PostContext from '../../Context/PostContext';
import Loader from '../UI/loader.gif';
import SinglePost from './SinglePost';
import { ToastContainer } from 'react-toastify';

const List = (props) => {
  const { posts } = useContext(PostContext); //I use all posts from context
  let history = useHistory();

  const createNewPost = () => {
    history.push('./create/');
  }; //function for going to a createnewpost component, on click

  if (posts === 'loading') {
    return (
      <div className="bg-light">
        <div className="d-flex justify-content-center bg-light">
          <img src={Loader} alt="loading" />
        </div>
      </div>
    ); //if there is no posts yet, I show loader
  } else {
    return (
      <div className="bg-light">
        <button
          type="button"
          className="btn btn-secondary m-3 fade-in"
          onClick={createNewPost}
        >
          Add new post
        </button>
        <ToastContainer />
        <div className=" d-flex justify-content-center">
          <div className="d-flex flex-column col-lg-5 col-sm-12 topmargin">
            {posts.map((post, index) => (
              <SinglePost post={post} key={Math.random()}></SinglePost>
              //
              //mapping array posts and creating each post, also we give single post as a props and random key value
              //
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default List;
