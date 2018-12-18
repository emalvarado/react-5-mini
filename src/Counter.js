import React, { Component } from 'react';

import {connect} from 'react-redux'
import {increment} from './ducks/counter'
import {decrement} from './ducks/counter'
import {undo} from './ducks/counter'
import {redo} from './ducks/counter'

class Counter extends Component {
  render() {
    const { increment, decrement, undo, redo, currentValue, futureValues, previousValues } = this.props;
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => decrement(1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => decrement(5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={previousValues.length === 0}
              onClick={() => undo()}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={futureValues.length === 0}
              onClick={() => redo()}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </section>
      </div>
    );
  }
}

function filterProps(state){
  //filter here
  //what you return gets put on props
  /*
const vlas = {
  name: state.name,
  id: state.userId
}
return vals;
  */
  return state;
}

const actionsToDispatch = {
  increment,
  decrement,
  undo,
  redo
  //^ we imported this up above
}

const connectedCounter = connect(
  filterProps, 
  actionsToDispatch,
  );





export default connectedCounter(Counter);
