import React, { Component } from 'react';
import styled from 'styled-components'


const Btns = styled.button`
  margin-right:0.7rem !important;
  margin-bottom:0.4rem;
`

const Inputs = styled.input`
  margin-bottom:0.4rem;
`
const TitleH4 = styled.h4`
  color:black;
  margin-bottom:0.4rem;
`
 

class SignUp extends Component {
  state = {
    email: '',
    passwd: ''
  };
  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };
  createAccount = () => {
    this.props.createAccount(this.state.email, this.state.passwd);
  };
  render() {
    const errorMessages = {
      'auth/email-already-in-use': 'E-mail já foi utilizado.',
      'auth/weak-password': 'Senha muito fraca',
      'auth/invalid-email': 'E-mail inválido'
    };
    return (
      <div>
        <TitleH4>Criar Conta</TitleH4>
        <form className='form-inline'>
          <Inputs
            className='input is-rounded'
            type="text"
            onChange={this.handleChange('email')}
            placeholder="email"
          />
          <Inputs
            className='input is-rounded'
            type="password"
            onChange={this.handleChange('passwd')}
            placeholder="senha"
          />
          <Btns className='button is-primary' type="button" onClick={this.createAccount}>
            Criar conta
          </Btns>
          <Btns className='button is-primary' onClick={() => this.props.changeScreen('login')}>
            Já tenho uma conta, entrar!
          </Btns>
        {/*JSON.stringify(this.state)*/}
        </form>
        {this.props.isSignUpError && (
          <div className='card text-white bg-danger mt-3'>
            <div className='card-header'>Erro ao criar nova conta</div>
            <div className='card-body'>
              {errorMessages[this.props.signUpError]}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SignUp;



