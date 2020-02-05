import {combineReducers} from 'redux';
import tweetsReducer from './tweet';

export default combineReducers ({
  tweets: tweetsReducer,
});
