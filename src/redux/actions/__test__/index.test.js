import {SAVE_TWEET} from '../types';
import {saveTweet} from '../index';

describe ('saveComment', () => {
  it ('has the correct type', () => {
    const action = saveTweet ();

    expect (action.type).toEqual (SAVE_TWEET);
  });

  it ('has the correct payload', () => {
    const action = saveTweet ('New Comment');

    expect (action.payload).toEqual ('New Comment');
  });
});
