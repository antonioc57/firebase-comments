import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.color} !important;
  color: black !important;
`;
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
        {comment}
        <br />
        <span className="text-muted">Enviado por:{email}</span>
      </Wrapper>
    </div>
  );
};

export default Comment;
