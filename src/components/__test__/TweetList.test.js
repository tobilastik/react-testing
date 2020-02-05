import React from 'react';
import {mount} from 'enzyme';
import TweetList from '../TweetList';
import Root from '../../Root';

let wrapped;

beforeEach (() => {
  const initialState = {
    tweets: ['Tweet 1', 'Tweet 2'],
  };
  wrapped = mount (
    <Root initialState={initialState}>
      <TweetList />
    </Root>
  );
});

it ('creates one LI per tweet', () => {
  expect (wrapped.find ('li').length).toEqual (2);
});

it ('shows the text for each tweet', () => {
  expect (wrapped.render ().text ()).toContain ('Tweet 1Tweet 2');
});
