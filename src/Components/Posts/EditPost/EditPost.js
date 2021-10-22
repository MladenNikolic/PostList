import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import FormPost from '../Form/Form';
import PostContext from '../../../Context/PostContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPost = () => {
  const { posts } = useContext(PostContext);
  let [post, setCurrentPost] = React.useState('loading');
  let location = useLocation();
  let history = useHistory();

  const notify = () => toast.error('Not in function!'); //using toastify when user succesfull edit post

  const goBack = () => {
    history.push('/');
  };

  const onEditPost = () => {
    notify();
    history.push('/');
  };

  React.useEffect(() => {
    setCurrentPost(
      posts.find((item) => {
        return item.id === location.id;
      })
    );
  }, [location.id, posts, setCurrentPost]); //finding object in array of objects (posts) and then passing to form component (post={post}) where I will fill fields with informatin about editing post

  return (
    <div className="bg-light">
      <button type="button" className="btn btn-secondary m-3" onClick={goBack}>
        Go back
      </button>
      <FormPost post={post} onSave={onEditPost} />
    </div>
  );
};

export default EditPost;
