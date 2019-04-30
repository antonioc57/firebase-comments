import React, { Component } from 'react';

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
        <h1>Login</h1>
        <input
          type="text"
          onChange={this.handleChange('email')}
          placeholder="email"
        />
        <input
          type="password"
          onChange={this.handleChange('passwd')}
          placeholder="senha"
        />
        <button type="button" onClick={this.login}>
          Entrar
        </button>
        {this.props.isAuthError && (
          <p>
            <b>Erro: </b>
            {errorMessages[this.props.authError]}
          </p>
        )}
        <button onClick={() => this.props.changeScreen('signup')}>
          Criar Conta
        </button>
        {/*JSON.stringify(this.state)*/}
      </div>
    );
  }
}

export default Login;
