import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body"></div>
      <div className="col-auto">
        <button onClick={props.decreaseValue} className="btn">
          -
        </button>
        <input value={props.total} onChange={props.handleChangeEvent} />
        <button onClick={props.increaseValue} className="btn">
          +
        </button>
      </div>
      {console.log("Total: " + props.total)}
    </div>
  );
}

export default Card;
