import React,{ Component} from 'react'

class Login extends Component {
    state = {
        email:'',
        passwd:''
    }
    handleChange = field => event => {
        this.setState({
          [field]: event.target.value
        });
      };
    render(){
        return(
            <div>
                <h1>Login</h1>
                <input type='text' onChange={this.handleChange('email')} placeholder='email' />
                <input type='password' onChange={this.handleChange('passwd')} placeholder='senha' />
                <button type='button' onClick={this.props.login} />
                {/*JSON.stringify(this.state)*/}
            </div>
         )
    }
    
}

export default Login;