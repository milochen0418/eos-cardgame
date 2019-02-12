import { createStore, compose } from 'redux';
import rootReducer from 'reducers';

/*
The Redux store is defined in app/src/store/index.js. In createStore we add:

rootReducer - the rootReducer is the combined reducer passed to the store, the 
reducers are functions that can handle updates on the store.
initialState - the initialState of the store is empty.
enhancers - enhancers extend the functionality of the store. The only enhancer we apply here is 
the redux devtools extension which allows us to inspect the Redux store from Chrome. 
This is useful for debugging.

*/

const initialState = {};
const enhancers = [];

// DevTools Extension for debugging in Chrome
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store;