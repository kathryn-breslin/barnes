import React, { Component } from "react";

class Form extends Component {

    //Set the state for user input
    //Setting each as a string value to test; confirm best data-type for phone and zip
    state = {
        name: "", 
        phoneNumber: "", 
        email: "", 
        zip: ""
    };

    //function to handle the event change when user types
    handleInputChange = event => {
        const { name, value } = event.target;
        
        this.setState({ [name]: value });
        console.log({ [name]: value })
    }

    render() {
        return (
            <div>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="name"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="(610) 898-3456"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="Enter email"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    name="zipCode"
                    placeholder="19382"
                    onChange={this.handleInputChange}
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