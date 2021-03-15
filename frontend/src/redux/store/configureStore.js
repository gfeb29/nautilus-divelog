import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStatInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootreducer from '../reducers';

function configureStore(initialstate) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootreducer,
    initialstate,
    composeEnhancers(applyMiddleware(reduxImmutableStatInvariant(), thunk))
  );
}

export default configureStore();
