import React from 'react';
import './SinglePost.css';
import { useHistory } from 'react-router';

import Tag from './Tags/Tag';

const SinglePost = (props) => {
  let convertedDateFirstStep = new Date(props.post.publishDate);
  let finalDate = convertedDateFirstStep.toDateString(); //converting ISO 8601 date to a string date
  let history = useHistory();
  //
  //we have props (single post) and there are all data that we need, first name, last name, images, text...
  //
  const openPost = () => {
    history.push({ pathname: '/' + props.post.id, id: props.post.id });
  }; //when we click on single post, we redirect user to a /:id (detailed post component) where he can see whole post

  const editPost = () => {
    history.push({
      pathname: '/' + props.post.id + '/edit/',
      id: props.post.id,
    });
  }; //when we click on single post, we redirect user to a /:id/edit/ (EditPost) where he can user edit post

  return (
    <div className="card mt-2 mb-2 messagediv fade-in ">
      <div className="row">
        <div className="col-md-3">
          <img
            src={props.post.owner.picture}
            alt={props.post.owner.firstName}
            className="imageowner m-4 mb-2"
          />
          <p className="text-muted m-2 mt-0 nameowner">
            {props.post.owner.firstName} {props.post.owner.lastName}
          </p>
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <p className="card-text hover" onClick={openPost}>
              {props.post.text}
            </p>
            <p className="card-text">
              <small className="text-muted datetext">{finalDate}</small>
            </p>
          </div>
          <div className="d-flex flex-row">
            {props &&
              props.post.tags.map((tag, index) => <Tag tag={tag} key={tag} />)}
          </div>
          <hr />
          <button
            type="button"
            className="btn btn-sm btn-secondary mb-3 fade-in"
            onClick={editPost}
          >
            Edit post
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
