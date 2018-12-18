//CONSTANTS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';


//ACTION CREATORS
//actions are objectes
//action creators are functions
export function increment(amount) {
  return {
    type: INCREMENT,
    payload: amount
  }
}

export function decrement(amount) {
  return {
    type: DECREMENT,
    payload: amount
  }
}

export function undo() {
  return {
    type: UNDO
  }
}

export function redo() {
  return {
    type: REDO
  }
}

const initialState = {
  currentValue: 0,
  futureValues: [],
  previousValues: []
}


//REDUCER
export default function (state = initialState, action) {
  // if(!state) {
  //   state = initialState;
  // }
  //^ this will be needed is param was just state
  //^ same as all of that is writing state=inital state in parameters
  switch (action.type) {
    case INCREMENT:
      // var value = state.currentValue + action.payload
      // return Object.assign({}, state, { currentValue: value });
      return {
        currentValue: state.currentValue + action.payload,
        futureValues: [],
        previousValues: [state.currentValue, ...state.previousValues]
      };
    case DECREMENT:
      // var value = state.currentValue - action.payload
      // return Object.assign({}, state, {currentValue: value});
      return {
        currentValue: state.currentValue - action.payload,
        futureValues: [],
        previousValues: [state.currentValue, ...state.previousValues]
      };
      case UNDO:
      return {
        currentValue: state.previousValues[0],
        futureValues: [state.currentValue, ...state.previousValues],
        previousValues: state.previousValues.slice(1)
      };
      case REDO:
      return {
        currentValue: state.futureValues[0],
        futureValues: state.futureValues.slice(1),
        previousValues: [state.currentValue, ...state.previousValues]
      };
      default:
      return state;
  }
}

//never change a value in Object.assign that you did not define in your inital state