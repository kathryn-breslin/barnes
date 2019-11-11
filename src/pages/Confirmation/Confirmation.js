import React, { Component } from "react";
import "./Confirmation.css";

//My next step would be to send the state object of user information and superhero information to this page
//I would render this data similarly to how that of the data on the Hero component

//I would then create a button at the bottom of this container that would ultimately take the user to the next page (as outlined in the instructions)
//This button would only be clickable/shown if the user has chosen at least one Hero quantity
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
                <p className="card-text">
                  <h1>0</h1>
                </p>
              </div>
              <div className="col-4">
                <h5 className="card-title">Total Powers</h5>
                <p className="card-text">
                  <h1>0</h1>
                </p>
              </div>
            </div>  
          </div>
        </div>

        <div className="card">
          <div className="card-header">Search By Power</div>
          <div className="card-body">
            <div className="row">
              <div className="col-12" id="searchForm">
              <form class="form-inline justify-content-end">
                  <div className="form-group mx-sm-3 mb-2">
                    <label for="searchByPower" className="sr-only">
                      Password
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="searchByPower"
                      placeholder="Search by Power"
                    />
                  </div>
                  <button
                    id="searchByPowerButton"
                    className="btn btn-outline-dark mb-2"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Confirmation;
