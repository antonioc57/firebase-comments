import React, { Component } from 'react';
import Comments from './Comments';
import NewCommnet from './NewComment';

class App extends Component {
  state = {
    comments: {},
    isLoading: false
  };
  sendComment = comment => {
    const { database } = this.props;
    const id = database
      .ref()
      .child('comments')
      .push().key;
    const comments = {};
    comments['comments/' + id] = {
      comment
    };
    database.ref().update(comments);
  };

  componentDidMount() {
    const { database } = this.props;
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
  }

  render() {
    return (
      <div>
        <NewCommnet sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
        {this.state.isLoading && <p>Carregando...</p>}
      </div>
    );
  }
}

export default App;