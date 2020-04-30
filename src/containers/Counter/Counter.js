import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 8"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map((result, id) => (
            <li key={id} onClick={() => this.props.onDeleteResult(id)}>
              {result}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// slice of the state we want to fetch
const mapStateToProps = (state) => {
  return {
    ctr: state.CounterReducer.counter,
    results: state.ResultReducer.results,
  };
};

// action we want to execute or dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () =>
      dispatch({
        type: actionTypes.INCREMENT,
      }),
    onDecrementCounter: () =>
      dispatch({
        type: actionTypes.DECREMENT,
      }),
    onAddCounter: () =>
      dispatch({
        type: actionTypes.ADD,
        value: 10,
      }),
    onSubtractCounter: () =>
      dispatch({
        type: actionTypes.SUBTRACT,
        value: 8,
      }),

    onStoreResult: (result) =>
      dispatch({
        type: actionTypes.STORE_RESULT,
        result,
      }),
    onDeleteResult: (id) => {
      dispatch({
        type: actionTypes.DELETE_RESULT,
        id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
