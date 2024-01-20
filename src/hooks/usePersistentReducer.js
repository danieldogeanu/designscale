import { useCallback, useReducer } from "react";

/**
 * Initializer function for the reducer, that saves the state to `localStorage`.
 * @param {string} storageKey The key to use to save data and retrieve it from `localStorage`.
 * @param {object} initialState The initial state to save to `localStorage` and return it to the reducer.
 * @returns {object} Returns either the state saved to `localStorage` or the `initialState`.
 */
function initState(storageKey, initialState) {
  if (typeof storageKey !== 'string' || storageKey === '') {
    throw new Error('storageKey must be a string and must not be empty!');
  }
  if (typeof initialState !== 'object' || typeof initialState === 'object' && JSON.stringify(initialState) === JSON.stringify({})) {
    throw new Error('initialState must be an object and must not be empty!')
  }


  // Initialize state with existing value saved in `localStorage`.
  try {
    const localStorageValue = localStorage.getItem(storageKey);

    if (localStorageValue !== null) {
      // If there's an existing value in `localStorage`, 
      // parse it and return it to be the initial reducer state.
      return JSON.parse(localStorageValue);
    } else {
      // If no existing value is present, we'll just save
      // the `initialState` to `localStorage`.
      localStorage.setItem(storageKey, JSON.stringify(initialState));
    }
  } catch (error) {
    // If the user is in Incognito Mode, `localStorage` access will throw an error.
    // If the value is malformed JSON, `JSON.parse` will also throw an error.
    console.error(error);
  }

  return initialState;
}

/**
 * Hook that persists the reducer state to `localStorage` and syncs it back in.
 * @param {(state: object, action: object) => object} reducer The reducer function to call to set the new state.
 * @param {string} storageKey The key to use to save data and retrieve it from `localStorage`.
 * @param {object} initialState The initial state to save to `localStorage`.
 * @returns Returns a React reducer with its state saved to `localStorage`.
 */
export default function usePersistentReducer(reducer, storageKey, initialState) {
  if (typeof reducer !== 'function') {
    throw new Error('reducer must be a function that takes two parameters: (state, action).');
  }
  if (typeof storageKey !== 'string' || storageKey === '') {
    throw new Error('storageKey must be a string and must not be empty!');
  }
  if (typeof initialState !== 'object' || typeof initialState === 'object' && JSON.stringify(initialState) === JSON.stringify({})) {
    throw new Error('initialState must be an object and must not be empty!')
  }

  // Wrap the `reducer` with a memoized function that syncs 
  // the `newState` to `localStorage` before returning it.
  const reducerLocalStorage = useCallback((state, action) => {
    const newState = reducer(state, action);

    try {
      // Store the `newState` in the `localStorage`.
      localStorage.setItem(storageKey, JSON.stringify(newState));
    } catch (error) {
      // If the user is in Incognito Mode, `localStorage` access will throw an error.
      // If the value is malformed JSON, `JSON.parse` will also throw an error.
      console.error(error);
    }

    return newState;
  }, [reducer, storageKey]);

  // We use `initState` function to initialize state from `localStorage`.
  return useReducer(reducerLocalStorage, undefined, () => initState(storageKey, initialState));
}
