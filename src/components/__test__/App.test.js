import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import TweetBox from '../TweetBox';
import TweetList from '../TweetList';

let wrapped;
beforeEach (() => {
  wrapped = shallow (<App />);
});

it ('shows a comment box ', () => {
  expect (wrapped.find (TweetBox).length).toEqual (1);
});

it ('shows comment list', () => {
  expect (wrapped.find (TweetList).length).toEqual (1);
});
