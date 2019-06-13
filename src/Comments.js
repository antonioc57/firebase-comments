import React from 'react';
import Comment from './Comment';

const Comments = ({ comments, emailUser }) => {
  const keys = Object.keys(comments);
  return (
    <div>
      {keys.map(key => (
        <Comment emailUser={emailUser} key={key} c={comments[key]} />
      ))}
    </div>
   );
};

export default Comments;
