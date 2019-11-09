import React, { Component } from "react";
import HeroService from "../Hero/Hero";
// import { Button, Collapse } from "react-bootstrap";
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
    formOpen: false
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

    const {
      name,
      phoneNumber,
      email,
      zip,
      nameError,
      phoneError,
      emailError,
      zipError
    } = this.state;

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

    if (
      nameError === "" &&
      phoneError === "" &&
      emailError === "" &&
      zipError === ""
    ) {
    // this.validated();
      this.setState({ formOpen: true});
    } else {
      if (!name.length) {
        console.log("Please add your name");
        this.setState({ nameError: "Please add your name. Ex: 'Jane Doe'" });
      } else {
        this.setState({ nameError: "" });
      }
      if (phoneNumber.length < 7 && isNaN) {
        console.log("Please enter a valid number.");
        this.setState({
          phoneError: "Please enter a valid number. Ex: 6101231234"
        });
      } else {
        this.setState({ phoneError: "" });
      }
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        console.log("Working email");
        this.setState({ emailError: "" });
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
        this.setState({ zipError: "" });
      }
    }
  };

  //Function to hide form on successful submittion of the form
    // validated = () => {
    //   console.log("Form has been validated! Time to hide the form.");
    //   // this.setState({ formOpen: false})
    // //   console.log(this.state.formOpen)

    // };

  render() {
    return (
      <div>

        {/* <Collapse> */}
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
              type="submit"
              className="btn btn-primary"
              onClick={this.handleFormSubmit}
            >
              Continue
            </button>
          </form>
        {/* </Collapse> */}

        {this.state.formOpen ? <HeroService/> : null}
      </div>
    );
  }
}

export default Form;
