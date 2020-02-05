import tweetReducer from '../../reducers/tweet';
import {SAVE_TWEET} from '../../actions/types';

it ('handles action of type SAVE_TWEET', () => {
  const action = {
    type: SAVE_TWEET,
    payload: 'New Comment',
  };
  const newState = tweetReducer ([], action);

  expect (newState).toEqual (['New Comment']);
});

it ('handles unkniwn  test', () => {
  const newState = tweetReducer ([], {});

  expect (newState).toEqual ([]);
});
