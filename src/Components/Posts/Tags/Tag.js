import React from 'react';

const Tag = (props) => {
  return <span className="badge bg-danger float-left m-2">{props.tag}</span>;
};

export default Tag;
