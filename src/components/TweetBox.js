import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';

class CommentBox extends Component {
  state = {
    comment: '',
  };

  handleChange = event => {
    this.setState ({
      comment: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault ();
    this.props.saveTweet (this.state.comment);
    this.setState ({
      comment: '',
    });
  };

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Tweet your mind</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />

          <div>
            <button>Tweet</button>
          </div>
        </form>
        <button className="fetch-tweet" onClick={this.props.fetchTweets}>
          Fetch Tweet
        </button>
      </div>
    );
  }
}
export default connect (null, actions) (CommentBox);
