import {SAVE_TWEET, FETCH_TWEET} from './types';
import axios from 'axios';

export function saveTweet (comment) {
  return {
    type: SAVE_TWEET,
    payload: comment,
  };
}

export function fetchTweets () {
  const response = axios.get ('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_TWEET,
    payload: response,
  };
}
