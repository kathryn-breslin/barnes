import React, { Component } from "react";

class Confirmation extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">Confirmation Page</div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <h5 className="card-title">Contact Information</h5>
                <p className="card-text">Name: </p>
                <p className="card-text">Phone Number: </p>
                <p className="card-text">Email: </p>
                <p className="card-text">Zip: </p>
              </div>
            <div className="col-4">
              <h5 className="card-title">Total Heros</h5>
              <p className="card-text"><h1>0</h1></p>
            </div>
            <div className="col-4">
              <h5 className="card-title">Total Powers</h5>
              <p className="card-text"><h1>0</h1></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;
