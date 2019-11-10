import React, { Component, useState } from "react";
import HeroService from "../Hero/Hero";
import { Collapse } from "react-bootstrap";
import "./Form.css";


class Form extends Component {
  //Set the state for user input
  //Setting each as a string value to test; confirm best data-type for phone and zip
  state = {
    name: "",
    phoneNumber: "",
    email: "",
    zip: "",
    nameError: "",
    phoneError: "",
    emailError: "",
    zipError: "",
    validated: false,
    formOpen: false,
    toggle: true
  };


  //function to handle the event change when user types
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    // console.log({ [name]: value });
  };

  //form to capture user input on submit
  //NEXT: add validation for each field
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Submit has been clicked!");

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

    if (!name.length) {
      console.log("Please add your name");
      this.setState({ nameError: "Please add your name. Ex: 'Jane Doe'" });
    } else {
      // this.setState({ nameError: "" });

      this.validated();
    }
    if (phoneNumber.length < 7 && isNaN) {
      console.log("Please enter a valid number.");
      this.setState({
        phoneError: "Please enter a valid number. Ex: 6101231234"
      });
    } else {
      // this.setState({ phoneError: "" });
      this.validated();
    }
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      console.log("Working email");
      // this.setState({ emailError: "" });
      this.validated();
    } else {
      console.log("Please add a valid email.");
      this.setState({
        emailError: "Please add a valid email. Ex: email@email.com"
      });
    }
    if (zip.length < 5 && isNaN) {
      console.log("Please add a valid zip.");
      this.setState({ zipError: "Please add valid zipcode. Ex: 19234" });
    } else {
      // this.setState({ zipError: "" });
      this.validated();
    }
  };
  // };

  //Function to hide form on successful submittion of the form
  validated = () => {
    console.log("Form has been validated! Time to hide the form.");
    // console.log("Name Error: " + nameError + " | Phone Error: " + phoneError)
    this.setState({ validated: true });
    if (this.state.validated) {
      this.setState({ formOpen: true });
      this.collapeForm(); 
      console.log("Form open state: " + this.state.formOpen);
      this.setState({ nameError: "", phoneError: "", emailError: "", zip: "" });
    } else {
      console.log("Form has not been validated");
    }
  };

  collapeForm () {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {

    return (
      <div>
        <div className="container" id="form">
          <div className="card">
            <div className="card-header">Personal Information</div>
            <div className="card-body">
              {/* <Collapse> */}
              {this.state.toggle ? (
                  <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        this.state.nameError ? "is-invalid" : ""
                      }`}
                      id="name"
                      name="name"
                      placeholder="name"
                      onChange={this.handleInputChange}
                    />
                    <div className="invalid">{this.state.nameError}</div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      className={`form-control ${
                        this.state.phoneError ? "is-invalid" : ""
                      }`}
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="(610) 898-3456"
                      onChange={this.handleInputChange}
                    />
                    <div className="invalid">{this.state.phoneError}</div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className={`form-control ${
                        this.state.emailError ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      aria-describedby="email"
                      placeholder="Enter email"
                      onChange={this.handleInputChange}
                    />
                    <div className="invalid">{this.state.emailError}</div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="zip">Zip Code</label>
                    <input
                      type="text"
                      className={`form-control ${
                        this.state.zipError ? "is-invalid" : ""
                      }`}
                      id="zip"
                      name="zip"
                      placeholder="19382"
                      onChange={this.handleInputChange}
                    />
                    <div className="invalid">{this.state.zipError}</div>
                  </div>
                  <button
                    id="submit"
                    type="submit"
                    className="btn btn-outline-dark my-2 my-sm-0 btn-block"
                    onClick={this.handleFormSubmit}
                  >
                    Continue
                  </button>
                </form>
              ) : <button className='btn' onClick={this.collapeForm}>Edit Form</button>}
            
              {/* </Collapse> */}
            </div>
          </div>
        </div>
        <div className="container" id="hero">
            {this.state.formOpen ? <HeroService /> : null}
          </div>
      </div>
    );
  }
}

export default Form;
