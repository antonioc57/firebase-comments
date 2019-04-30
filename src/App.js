import React, { Component } from 'react';
import Comments from './Comments';
import NewCommnet from './NewComment';
import Login from './Login';
import SignUp from './SignUp';
import User from './User';
import 'bootstrap-css-only';

class App extends Component {
  state = {
    comments: {},
    isLoading: false,
    isAuth: false,
    isAuthError: false,
    isSignUpError: false,
    signUpError: '',
    authError: '',
    user: {},
    userScreen: 'login' // signup
  };
  sendComment = comment => {
    const { database } = this.props;
    const id = database
      .ref()
      .child('comments')
      .push().key;
    const comments = {};
    comments['comments/' + id] = {
      comment,
      email: this.state.user.email,
      userid: this.state.user.uid
    };
    database.ref().update(comments);
  };

  login = async (email, passwd) => {
    const { auth } = this.props;
    this.setState({
      authError: '',
      isAuthError: false
    });
    try {
      await auth.signInWithEmailAndPassword(email, passwd);
      //const user = await auth.signInWithEmailAndPassword(email, passwd);
      //console.log('logar', email, passwd, user);
    } catch (err) {
      //console.log(err.code);
      this.setState({
        authError: err.code,
        isAuthError: true
      });
    }
  };

  createAccount = async (email, passwd) => {
    const { auth } = this.props;
    this.setState({
      signUpError: '',
      isSignUpError: false
    });
    try {
      await auth.createUserWithEmailAndPassword(email, passwd);
      //const user = await auth.signInWithEmailAndPassword(email, passwd);
      //console.log('logar', email, passwd, user);
    } catch (err) {
      //console.log(err.code);
      this.setState({
        signUpError: err.code,
        isSignUpError: true
      });
    }
  };

  componentDidMount() {
    const { database, auth } = this.props;
    this.setState({
      isLoading: true
    });
    this.comments = database.ref('comments');
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      });
    });

    auth.onAuthStateChanged(user => {
      //console.log(user);
      if (user) {
        this.setState({
          isAuth: true,
          user
        });
      } else {
        this.setState({
          isAuth: false,
          user: {}
        });
      }
    });
  }

  logout = () => {
    const { auth } = this.props;
    auth.signOut();
  };

  changeScreen = screen => {
    this.setState({
      userScreen: screen
    });
  };

  render() {
    return (
      <div className='container mt-3'>
        {this.state.isAuth && (
          <User email={this.state.user.email} logout={this.logout} />
        )}
        {!this.state.isAuth && this.state.userScreen === 'login' && (
          <Login
            login={this.login}
            isAuthError={this.state.isAuthError}
            authError={this.state.authError}
            changeScreen={this.changeScreen}
          />
        )}
        {!this.state.isAuth && this.state.userScreen === 'signup' && (
          <SignUp
            createAccount={this.createAccount}
            isSignUpError={this.state.isSignUpError}
            signUpError={this.state.signUpError}
            changeScreen={this.changeScreen}
          />
        )}

        {this.state.isAuth && <NewCommnet sendComment={this.sendComment} />}
        <Comments comments={this.state.comments} />
        {this.state.isLoading && <p>Carregando...</p>}
      </div>
    );
  }
}

export default App;
