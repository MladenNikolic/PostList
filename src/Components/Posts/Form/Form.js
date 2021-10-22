import React from 'react';

const FormPost = (props) => {
  let [enteredFirstName, setFirstName] = React.useState('');
  let [enteredLastName, setLastName] = React.useState('');
  let [enteredText, setText] = React.useState('');
  let [enteredImageUrl, setImageUrl] = React.useState('');
  let [enteredTag1, setTag1] = React.useState('');
  let [enteredTag2, setTag2] = React.useState('');
  let [enteredTag3, setTag3] = React.useState('');
  //state for all information

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const textHandler = (event) => {
    setText(event.target.value);
  };

  const imageUrlHandler = (event) => {
    setImageUrl(event.target.value);
  };

  const Tag1Handler = (event) => {
    setTag1(event.target.value);
  };

  const Tag2Handler = (event) => {
    setTag2(event.target.value);
  };

  const Tag3Handler = (event) => {
    setTag3(event.target.value);
  };
  //handlers for all information
  const submitHandler = (event) => {
    event.preventDefault();
    let tags = [enteredTag1, enteredTag2, enteredTag3];

    const post = {
      id: Math.random().toString(),
      owner: {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        picture: enteredImageUrl,
      },
      publishDate: new Date().toISOString(),
      tags: tags,
      text: enteredText,
    };
    props.onSave(post);

    setLastName('');
    setFirstName('');
    setText('');
    setImageUrl('');
    setTag1('');
    setTag2('');
    setTag3('');
  }; //on submit I create object (post) and then call function from parent component and pass object, also I reset fields

  return (
    <div className="bg-light d-flex justify-content-center p-4 fade-in">
      <form className="col-s-12 col-md-3" onSubmit={submitHandler}>
        <div className="form-group mt-4">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            value={enteredFirstName}
            onChange={firstNameHandler}
            required
          />
        </div>
        <div className="form-group mt-4">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            value={enteredLastName}
            onChange={lastNameHandler}
            required
          />
        </div>
        <div className="form-group mt-4">
          <label>Image url</label>
          <input
            type="text"
            className="form-control"
            value={enteredImageUrl}
            onChange={imageUrlHandler}
            required
          />
        </div>
        <div className="form-group mt-4">
          <label>Tag 1</label>
          <input
            type="text"
            className="form-control"
            value={enteredTag1}
            onChange={Tag1Handler}
            required
          />
        </div>
        <div className="form-group mt-4">
          <label>Tag 2</label>
          <input
            type="text"
            className="form-control"
            value={enteredTag2}
            onChange={Tag2Handler}
            required
          />
        </div>
        <div className="form-group mt-4">
          <label>Tag 2</label>
          <input
            type="text"
            className="form-control"
            value={enteredTag3}
            onChange={Tag3Handler}
            required
          />
        </div>
        <div className="form-group mt-4">
          <label>Text</label>
          <textarea
            className="form-control"
            rows="3"
            value={enteredText}
            onChange={textHandler}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary m-2">
          Submit
        </button>
      </form>
    </div>
  );
}; //form for new post

export default FormPost;
