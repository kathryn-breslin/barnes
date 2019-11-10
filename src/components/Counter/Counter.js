import React from "react";
import "./Counter.css";

const Counter = props => {
  return (
    <form className="form-inline">
      <div className="form-group mx-sm-3 mb-2">
        <button onClick={props.decreaseValue} className="btn btn-light">
          -
        </button>
        <input name="quantity" className="input" value={props.total} onChange={props.handleChangeEvent} />
        <button onClick={props.increaseValue} className="btn btn-light">
          +
        </button>
      </div>
    </form>
  );
};

export default Counter;
