import { createStore, applyMiddleware } from 'redux';
import middlewares from '../middleware';
import reducer from '../reducer';

// const enhancer = compose(
//     applyMiddleware(...middlewares),
//     window.devToolsExtension && window.devToolsExtension(),
// );
// const initialState = {};
const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

export default store;
