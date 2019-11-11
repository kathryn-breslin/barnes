import React from "react";
import "./Counter.css";

const Counter = props => {
  return (
    <form className="form">
      <div className="form-inline">
        <button onClick={props.decreaseValue} className="btn btn-light">
          -
        </button>
        <input className="form-control input" name="quantity" value={props.total} onChange={props.handleChangeEvent} />
        <button onClick={props.increaseValue} className="btn btn-light">
          +
        </button>
      </div>
    </form>
  );
};

export default Counter;
