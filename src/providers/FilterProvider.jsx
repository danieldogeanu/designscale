import { createContext, useReducer } from 'react';

const defaultState = {
  filter: null,
  scale: 4,
  size: 1000,
};

/** React context for global filter state. */
export const FilterContext = createContext(defaultState);

/**
 * Reducer that updates the filter state for the FilterProvider.
 * @param {{filter: number | null, scale: number, size: number}} state The state object to be updated with new values.
 * @param {{type: string, value: number}} action The action object dispatched to update the state.
 * @returns {{filter: number, scale: number, size: number}} Returns the new state.
 */
function filterReducer(state, action) {
  switch (action.type) {
    case 'filter': {
      return {...state, filter: parseInt(action.value)};
    }
    case 'scale': {
      return {...state, scale: parseInt(action.value)};
    }
    case 'size': {
      return {...state, size: parseInt(action.value)};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

/**
 * React context provider for global filter state. This will be used to filter numbers.
 * @param {{children}} props The provider props and children.
 * @returns Returns the context provider for React.
 */
export default function FilterProvider({children}) {
  const [state, dispatch] = useReducer(filterReducer, defaultState);
  const value = {state, dispatch};

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}
