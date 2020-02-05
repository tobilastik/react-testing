import {SAVE_TWEET, FETCH_TWEET} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SAVE_TWEET:
      return [...state, action.payload];
    case FETCH_TWEET:
      const tweets = action.payload.data.map (comment => comment.name);
      return [...state, ...tweets];
    default:
      return state;
  }
}
