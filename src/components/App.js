import React from 'react';
import TweetBox from './TweetBox';
import TweetList from './TweetList';
import Header from './Header';

export default () => {
  return (
    <div>
      <Header />
      <TweetBox />
      <TweetList />

    </div>
  );
};
