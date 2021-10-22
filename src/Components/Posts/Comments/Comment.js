import React from 'react';
import './Comment.css';

const Comment = (props) => {
  return (
    <div className="bg-light d-flex justify-content-center m-2 fade-in-comment">
      <div className="card col-s-12 col-md-3">
        <div className="col-md-4">
          <img
            src={props.comment.owner.picture}
            alt={props.comment.owner.firstName}
            className="imageownercomments m-2 mb-0"
          />
          <p className="card-subtitle text-muted m-1 mb-0 datetextcomments">
            {props.comment.owner.firstName} {props.comment.owner.lastName}
          </p>
        </div>
        <hr />
        <div className="card-body col-10">
          <p className="card-text">{props.comment.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
