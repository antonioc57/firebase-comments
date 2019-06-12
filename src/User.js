import React from 'react';

const User = props => {
  return (
    <div>
      Logado como: {props.email}
      <button className='button is-primary' onClick={props.logout}>Sair</button>
    </div>
  );
};

export default User;
