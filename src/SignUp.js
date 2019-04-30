import React, { Component } from 'react';

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
        <h1>Criar Conta</h1>
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
        <button type="button" onClick={this.createAccount}>
          Criar conta
        </button>
        {this.props.isSignUpError && (
          <p>
            <b>Erro: </b>
            {errorMessages[this.props.signUpError]}
          </p>
        )}
        <button onClick={() => this.props.changeScreen('login')}>
          Já tenho uma conta, entrar!
        </button>
        {/*JSON.stringify(this.state)*/}
      </div>
    );
  }
}

export default SignUp;
