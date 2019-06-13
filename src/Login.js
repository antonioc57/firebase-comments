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
 
class Login extends Component {
  state = {
    email: '',
    passwd: ''
  };
  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };
  login = () => {
    this.props.login(this.state.email, this.state.passwd);
  };
  render() {
    const errorMessages = {
      'auth/wrong-password': 'E-mail e/ou senha inválidos',
      'auth/user-not-found': 'Usuário não encontrado',
      'auth/invalid-email': 'E-mail inválido'
    };
    return (
      <div>
        <TitleH4>Entre para comentar:</TitleH4>
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
            <Btns className='button is-primary' type="button" onClick={this.login}>
              Entrar
            </Btns>
            <Btns className='button is-primary' onClick={() => this.props.changeScreen('signup')}>
              Criar Conta
            </Btns>
           {/*JSON.stringify(this.state)*/}
        </form>
        {this.props.isAuthError && (
          <div className='card text-white bg-danger mt-3'>
          <div className='card-header'>Erro ao entrar</div>
            <div className='card-body'>
              {errorMessages[this.props.authError]}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
