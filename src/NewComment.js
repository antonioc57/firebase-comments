import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

class NewComment extends Component {
  state = {
    newComment: ''
  };
  handleChange = event => {
    this.setState({
      newComment: event.target.value
    });
  };
  sendComment = () => {
    this.props.sendComment(this.state.newComment);
    this.setState({
      newComment: ''
    });
  };
  render() {
    return (
      <Wrapper>
        <input  className='input is-rounded' value={this.state.newComment} onChange={this.handleChange} />
        <button className='button is-primary' onClick={this.sendComment}>Enviar</button>
      </Wrapper>
    );
  }
}
export default NewComment;
