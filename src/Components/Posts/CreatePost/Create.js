import React, { useContext } from 'react';
import PostContext from '../../../Context/PostContext';
import Form from '../Form/Form';
import { useHistory } from 'react-router';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = (props) => {
  let history = useHistory();
  const { posts, setPost } = useContext(PostContext);

  const notify = () => toast('You added a post.'); //using toastify for notifications when user make a new post

  const onSavePosts = (newPost) => {
    setPost([newPost, ...posts]);
    history.push('/');
    notify();
  }; //when I save a new post, I redirect to a list list component

  const goBack = () => {
    history.push('/');
  }; //function for going back to list component

  return (
    <div className="bg-light">
      <button
        type="button"
        className="btn btn-secondary m-3 fade-in"
        onClick={goBack}
      >
        Go back
      </button>
      <Form onSave={onSavePosts} />
    </div>
  ); //passing function to a Form component, on submit I call function in Form component
};

export default Create;
