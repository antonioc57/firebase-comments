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
        <h4>Criar Conta</h4>
        <form className='form-inline'>
          <input
            className='input is-rounded'
            type="text"
            onChange={this.handleChange('email')}
            placeholder="email"
          />
          <input
            className='input is-rounded'
            type="password"
            onChange={this.handleChange('passwd')}
            placeholder="senha"
          />
          <button className='button is-primary' type="button" onClick={this.createAccount}>
            Criar conta
          </button>
          <button className='button is-primary' onClick={() => this.props.changeScreen('login')}>
            Já tenho uma conta, entrar!
          </button>
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



