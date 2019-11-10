import React from "react";
import "./Counter.css";

const Counter = props => {
  return (
    // <div className="card">
    //   <div className="card-body"></div>
    //   <div className="form-inline">
    <form className="form-inline">
      <div className="form-group mx-sm-3 mb-2">
        <button onClick={props.decreaseValue} className="btn btn-light">
          -
        </button>
        <input className="input" value={props.total} onChange={props.handleChangeEvent} />
        <button onClick={props.increaseValue} className="btn btn-light">
          +
        </button>
      </div>
    </form>
  );
};

export default Counter;
