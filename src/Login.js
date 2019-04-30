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
        <h4>Entre para comentar:</h4>
        <form className='form-inline'>
            <input
              className='form-control mr-2'
              type="text"
              onChange={this.handleChange('email')}
              placeholder="email"
            />
            <input
              className='form-control mr-2'
              type="password"
              onChange={this.handleChange('passwd')}
              placeholder="senha"
            />
            <button className='btn btn-primary' type="button" onClick={this.login}>
              Entrar
            </button>
            <button className='btn' onClick={() => this.props.changeScreen('signup')}>
              Criar Conta
            </button>
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
