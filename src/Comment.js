import React from 'react';

const Comment = ({ c }) => {
  let comment = 'vazio';
  let email = 'vazio';
  if (c.comment) {
    if (c.comment) {
      comment = c.comment;
    }
    if (c.email) {
      email = c.email;
    }
  }
  return (
    <div>
      Comentário: {comment}
      <br />
      Enviado por:{email}
      <hr />
    </div>
  );
};
export default Comment;
