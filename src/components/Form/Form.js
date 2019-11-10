import React, { Component } from "react";
import HeroService from "../Hero/Hero";
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
    toggle: true,
    heroToggle: false
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

    //Unstable verification logic.
    //Determining if the 'name' input field has an index
    if (!name.length) {
      console.log("Please add your name");
      this.setState({ nameError: "Please add your name. Ex: 'Jane Doe'" });
    } else {
      this.validated();
    }

    //Determine if the input field for phone number
    //has a length less than 7 and is a numeric value
    if (phoneNumber.length < 7 && isNaN) {
      console.log("Please enter a valid number.");
      this.setState({
        phoneError: "Please enter a valid number. Ex: 6101231234"
      });
    } else {
      this.validated();
    }

    //Use regex to determine if email is valid.
    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      console.log("Working email");
      this.validated();
    } else {
      //If this is not an email, throw an error
      console.log("Please add a valid email.");
      this.setState({
        emailError: "Please add a valid email. Ex: email@email.com"
      });
    }

    //Determine if zipcode is more than 5 character and are only numeric values
    if (zip.length < 5 && isNaN) {
      console.log("Please add a valid zip.");
      this.setState({ zipError: "Please add valid zipcode. Ex: 19234" });
    } else {
      this.validated();
    }
  };

  //Function to validate form fields
  //Will call Collapse form function if validated
  validated = () => {
    console.log("Form has been validated! Time to hide the form.");
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

  //Collapse form if validated
  //Function will break if user clicks the "Edit Form button" that is rendered once collapsed - toggle state returned as undefined
  //Hero component causing the break?

  collapeForm() {
    this.setState({ toggle: !this.state.toggle });
    this.setState({ herotoggle: !this.state.toggle });

  }

  // openHero() {
  //   if (this.state.formOpen && !this.state.heroToggle) {
  //     console.log("Open hero!")
  //     return (
  //       <HeroService/>
  //     )
  //   }
  // }

  render() {
    return (
      <div>
        <div className="container" id="form">
          <div className="card">
            <div className="card-header">Customer Form</div>
            <div className="card-body">
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
              ) : (
                //onClick breaks with undefined state
                <button className="btn" onClick={() => this.collapeForm()}>
                  Edit Form
                </button>
              )}
            </div>
          </div>
        </div>
        {/* <div className="card">
          <div className="card-header">Heroes</div>
        {this.state.heroToggle ? ( */}
        <div className="container" id="hero">
          {/* {this.openHero()} */}
        {this.state.formOpen ? <HeroService /> : null}
      </div>
        {/* // ): (
        //   <button className="btn" onClick={() => this.collapeForm()}>
        //   Edit Hero
        // </button>
        // )} 
        // </div> */}
      </div>
    );
  }
}

export default Form;
