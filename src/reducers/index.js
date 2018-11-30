import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

const example = (example = {}, action) => {
  return example;
};

export default (history) => combineReducers({
  router: connectRouter(history),
  example,
});
