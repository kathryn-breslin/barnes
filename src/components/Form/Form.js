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

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Submit has been clicked!")

        const { name, phoneNumber, email, zip } = this.state;

        this.setState({ 
            name: name, 
            phoneNumber: phoneNumber, 
            email: email, 
            zip: zip
        });

        console.log("Name: " + name);
        console.log("Number: " + phoneNumber);
        console.log("Email: " + email);
        console.log("Zip: " + zip);

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
                    id="zip"
                    name="zip"
                    placeholder="19382"
                    onChange={this.handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
                  Submit
                </button>
              </form>
            </div>
          );
        };
    }
  
export default Form;