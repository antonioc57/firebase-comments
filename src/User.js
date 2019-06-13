import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  margin-top:1.5rem;
`;

const Text = styled.span`
  color: gray;
  display: inline-block;
  width: 80px;
`;
const Email = styled.span`
  color: black;
  display: inline-block;
  margin-right: 2rem;
`;

const User = props => {
  return (
    <Wrapper>
      <Text>Logado como:</Text> <Email>{props.email}</Email>
      <button className="button is-primary" onClick={props.logout}>
        Sair
      </button>
    </Wrapper>
  );
};

export default User;
