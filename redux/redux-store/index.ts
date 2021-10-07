import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from '../redux-reducer';

let store: any;

function initStore(initialState: any) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}

export const initializeStore = (preloadedState: any) => {
  let preloadstore = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    preloadstore = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return preloadstore;
  // Create the store once in the client
  if (!store) store = preloadstore;

  return preloadstore;
};

export function useStore(initialState: any) {
  const usestore = useMemo(() => initializeStore(initialState), [initialState]);
  return usestore;
}