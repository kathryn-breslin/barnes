import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <div>
              <form>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="name"
                  />
                </div>
                <div className="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="(610) 898-3456"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="zip">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    placeholder="19382"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          );
        };
    }
  
export default Form;