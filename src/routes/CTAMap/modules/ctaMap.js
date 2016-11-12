// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_DATA = 'LOAD_DATA'

// ------------------------------------
// Actions
// ------------------------------------
export function loadLocation () {
  return (dispatch) => {
    return (
      fetch('http://127.0.0.1:5050/bustime')
      .then((response) => response.json())
      .then((respJSON) => {
        dispatch({
          type: LOAD_DATA,
          payload: respJSON["bustime-response"]
        });
      })
    )
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */



export const actions = {
  loadLocation,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_DATA] : (state, action) => { return {...state, stops: action.payload.stops} }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { stops: [] }

export default function ctaMapReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  
  return handler && action.payload ? handler(state, action) : state
}
