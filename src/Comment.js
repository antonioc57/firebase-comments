import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.color} !important;
  color: gray;
  font-size:0.7rem;
`;

const Text = styled.div`
  font-size:1rem;
  color: black !important;
`

const WrapperInfo = styled.span`
  display:flex;
  align-items:center;
  justify-content:right;
`

const Enviado = styled.span`
  color: gray !important;
  margin-right:0.4rem;
`

const Email = styled.span`
  color: gray !important;
`

const Comment = ({ c, emailUser }) => {
  const [color, setColor] = useState("#FFF");
  let comment = "vazio";
  let email = "vazio";
  if (c.comment) {
    if (c.comment) {
      comment = c.comment;
    }
    if (c.email) {
      email = c.email;
    }
  }
  useEffect(() => {
    if (c.email === emailUser) {
      changeColor("#DCF8C6");
    } else {
      changeColor("#FFF");
    }
    return () => {
      changeColor("#FFF");
    };
  });
  const changeColor = value => {
    setColor(value);
  };

  return (
    <div className="card mt-3">
      <Wrapper color={color} className="box">
        <Text>{comment}</Text>
        <br />
        <WrapperInfo>
          <Enviado>Enviado por: </Enviado> 
          <Email>{email}</Email>
        </WrapperInfo>
      </Wrapper>
    </div>
  );
};

export default Comment;
