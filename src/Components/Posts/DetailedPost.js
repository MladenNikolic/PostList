import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

import './DetailedPost.css';
import Comment from './Comments/Comment';
import Tag from './Tags/Tag';
import NewComment from './Comments/NewComment';
import Loader from '../UI/loader.gif';
import 'react-toastify/dist/ReactToastify.css';

const DetailedPost = () => {
  const location = useLocation(); //I catch data with useLocation that I pass with useHistory, and store it in "location" variable
  let history = useHistory();
  let [post, setPost] = React.useState('loading'); //single post I get this with axios
  let [comments, setComments] = React.useState([]); //comments, if there are comments they will be stored here, also new one will be stored here
  let convertedDateFirstStep = new Date(post.publishDate);
  let finalDate = convertedDateFirstStep.toDateString(); //converting ISO 8601 date to a string date

  React.useEffect(() => {
    axios
      .get('https://dummyapi.io/data/v1/post/' + location.id, {
        headers: {
          'app-id': '6171bf1cbc806d422eed4396',
        },
      })
      .then((response) => {
        setPost(response.data);
      }, []); //getting a single post

    axios
      .get(
        'https://dummyapi.io/data/v1/post/' + location.id + '/comment?limit=10',
        {
          headers: {
            'app-id': '6171bf1cbc806d422eed4396',
          },
        }
      )
      .then((response) => {
        setComments(response.data.data);
      });
  }, [location.id]); //getting a comments

  const goBack = () => {
    history.push('./');
  }; //function for going back to a list component

  const saveCommentHandler = (newComment) => {
    setComments([...comments, newComment]);
  }; //function for adding new comments

  if (post === 'loading') {
    return (
      <div className="bg-light">
        <button
          type="button"
          className="btn btn-secondary m-3 fade-in"
          onClick={goBack}
        >
          Go back
        </button>
        <div className="d-flex justify-content-center bg-light">
          <img src={Loader} alt="loading" />
        </div>
      </div>
    ); //if post is not yet there, I will show loader
  } else {
    return (
      <div className="bg-light">
        <button
          type="button"
          className="btn btn-secondary m-3 fade-in"
          onClick={goBack}
        >
          Go back
        </button>
        <div className="d-flex justify-content-center">
          <div className="card mt-2 mb-2 messagediv fade-in col-sm-12 col-md-8 ">
            <div className="row d-flex justify-content-center">
              <div className="col-md-11">
                <img
                  src={post.owner.picture}
                  alt={post.owner.firstName}
                  className="imageownerdetailedposts m-4 mb-2"
                />
                <p className="text-muted m-2 mt-0 nameownerdetailedposts">
                  {post.owner.firstName} {post.owner.lastName}
                </p>
                <hr />
              </div>

              <div className="col-md-10 d-flex justify-content-center">
                <img
                  src={post.image}
                  alt={post.text}
                  className="rounded m-4 mr-4 img-fluid"
                />
              </div>
              <div className="card-body col-md-11 m-4">
                <p className="card-text">{post.text}</p>
                <div className="d-flex flex-row">
                  {post &&
                    post.tags.map((tag, index) => <Tag tag={tag} key={tag} />)}
                </div>
                <p className="card-text">
                  <small className="text-muted datetext">{finalDate}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        {comments &&
          comments.map((comment, index) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        <NewComment onSaveComment={saveCommentHandler} />
      </div>
    ); //I map all comments via Comment component, also via NewComment component I add new components, passing functions and returning object, then pushing into state for comments
  }
};

export default DetailedPost;
