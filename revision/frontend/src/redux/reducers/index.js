import { combineReducers } from 'redux';
import immersionReducer from './immersionReducer';
import loginReducer from './loginReducer';

const rootreducer = combineReducers({
  immersionReducer,
  loginReducer
});

export default rootreducer;
