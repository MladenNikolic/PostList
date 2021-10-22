import React from 'react';

const NewComment = (props) => {
  let [enteredFirstName, setFirstName] = React.useState('');
  let [enteredLastName, setLastName] = React.useState('');
  let [enteredComment, setComment] = React.useState('');
  let [enteredImageUrl, setImageUrl] = React.useState('');
  //states for informations

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const commentHandler = (event) => {
    setComment(event.target.value);
  };

  const imageUrlHandler = (event) => {
    setImageUrl(event.target.value);
  };
  //handlers for typing a new comment

  const submitHandler = (event) => {
    event.preventDefault();

    const comment = {
      id: Math.random().toString(),
      message: enteredComment,
      owner: {
        firstName: enteredFirstName,
        lastname: enteredLastName,
        picture: enteredImageUrl,
      },
    };
    props.onSaveComment(comment);
    setLastName('');
    setFirstName('');
    setComment('');
    setImageUrl('');
  }; //submit handler take information from state and then create object and pass in parent component with props.onSave(comment);, then in parent component we push into array of comments

  return (
    <div className="bg-light d-flex justify-content-center m-2 mt-4">
      <form className="col-s-12 col-md-3" onSubmit={submitHandler}>
        <div className="form-group m-2">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            value={enteredFirstName}
            onChange={firstNameHandler}
            required
          />
        </div>
        <div className="form-group m-2">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            value={enteredLastName}
            onChange={lastNameHandler}
            required
          />
        </div>
        <div className="form-group m-2">
          <label>Image url</label>
          <input
            type="text"
            className="form-control"
            value={enteredImageUrl}
            onChange={imageUrlHandler}
            required
          />
        </div>
        <div className="form-group m-2">
          <label>Comment</label>
          <textarea
            className="form-control"
            rows="3"
            value={enteredComment}
            onChange={commentHandler}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewComment;
