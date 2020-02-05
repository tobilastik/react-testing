import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {
  renderComments () {
    return this.props.tweets.map (tweets => {
      return <li key={tweets}>{tweets}</li>;
    });
  }

  render () {
    return (
      <div>
        {this.renderComments ()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets,
  };
};

export default connect (mapStateToProps) (CommentList);
