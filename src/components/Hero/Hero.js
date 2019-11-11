import React, { Component } from "react";
import "./Hero.css";
import json from "../../utils/json";
import CardCounter from "../Counter/Counter";
import { Link } from "react-router-dom";

//Array of objects to expand to the superheros JSON endpoint
const newHeros = [
  {
    name: "Melinda Gates",
    age: "55",
    secretIdentity: "Bill & Melinda Gates Foundation",
    powers: ["Kindness", "Empathy", "Influence"]
  },
  {
    name: "Warren Buffet",
    age: "89",
    secretIdentity: "Berkshire Hathaway",
    powers: ["Patience", "Dedication", "Honesty"]
  },
  {
    name: "Elon Musk",
    age: "48",
    secretIdentity: "SpaceX",
    powers: ["Productivity", "Creativity", "Risk-tolerant"]
  },
  {
    name: "Mark Zuckerberg",
    age: "35",
    secretIdentity: "Facebook",
    powers: ["Innovation", "Assertiveness", "Problem-solving"]
  }
];

let checkout = 0;

// Create Counter class to manage individual counter's state for each superhero. Superheros are mapped in HeroService class (see below)
class Counter extends Component {

  //Structure state for "total"  -- the value being tracked by the counter
  state = {
    total: 0,
    topTotal: 0
  };

  //increaseValue function increased the Total state when user clicks the " + "  button
  increaseValue = event => {
    event.preventDefault();
    event.preventDefault();

    this.setState(
      prevState => {
        if (prevState.total < 10) {
          return {
            total: prevState.total + 1
          };
        } else {
          return null;
        }
      },
      () => {
        this.calculateTotal();
      }
    );
  };

//decreaseValue function lessens the Total state when user clicks the " - "  button
  decreaseValue = event => {
    event.preventDefault();

    this.setState(
      prevState => {
        if (prevState.total > 0) {
          return {
            total: prevState.total - 1
          };
        } else {
          return null;
        }
      },
      () => {
        this.calculateTotal();
      }
    );
  };

  //Attempt at calculating the total
  // My hope was to create a separate value to mirror the Total state
  // When the user increases/decreases another superhero the Total state returns to zero for that hero
  calculateTotal() {
    checkout = this.state.total;
    console.log("Checkout: " + checkout);
    const { total, topTotal } = this.state;
    // let currentTotal = 0;
    // currentTotal += total;
    // this.setState({ topTotal: currentTotal})
    console.log("Current Total: " + total);
  }

//This function renders the value inside the counter. Value begins at 0 and increases/decreases along with the user clicks. Tracks the event change
  handleEventChange = event => {
    event.preventDefault();
    this.setState({ total: event.target.value });
  };

  render() {
    return (
      <div>
        <CardCounter
          total={this.state.total}
          increaseValue={this.increaseValue}
          decreaseValue={this.decreaseValue}
        />
      </div>
    );
  }
}

// Hero service component to manage the state of each superhero
class HeroService extends Component {
  state = {
    heros: [],
    squadName: "",
    homeTown: "",
    secretBase: "",
    formed: ""
  };

  componentDidMount() {
    this.squadInfo();
  }

//This function calls the "API" of JSON data at https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json
//I make an axios call inside of the "utils" folder that gets this data
//This is the function that return the response
//I have used the spread operator to include my array of heros to the data that is being returned by the axios call
  squadInfo() {
    json.heros().then(res => {
      this.setState({
        heros: [...res.data.members, ...newHeros],
        squadName: res.data.squadName,
        homeTown: res.data.homeTown,
        secretBase: res.data.secretBase,
        formed: res.data.formed
      });
    });
  }

  //This is where I would have liked managed the data of each of the superhero quantities and powers
  //I would have handled this submission similarly to how I received the form data/data from the Form component
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Submit!");
  };

  //This function maps the Hero state and structures the data before being returned
  allHeros() {
    const { heros } = this.state;

    const herosList = heros.map((item, index) => {
      const allPowers = item.powers.join(", ");
      return (
        <div className="card" key={item} id="superHeroCard">
          <div className="row">
            <div className="col-3">
              <h5>{"Super Hero"}</h5>
              <p>{item.name + "/" + item.secretIdentity}</p>
            </div>
            <div className="col-4">
              <h5>{"Super Powers"}</h5>
              <p>{allPowers}</p>
            </div>
            <div className="col-5">
              <h5>{"Quantity"}</h5>
              <Counter id={index} />
            </div>
          </div>
        </div>
      );
    });
    return <ul>{herosList}</ul>;
  }

  render() {
    const { squadName, homeTown, secretBase, formed } = this.state;
    return (
      <div>
        <div className="card">
          <div className="card-header">Heroes</div>
          <div className="card-body">
            <h5 className="card-title" id="squadName">
              {"Squad Name: " + squadName}
            </h5>
            <p className="card-text" id="homeTown">
              {"Hometown: " + homeTown}
            </p>
            <p className="card-text" id="secretBase">
              {"Secret Base: " + secretBase}
            </p>
            <p className="card-text" id="formed">
              {"Formed: " + formed}
            </p>

            <div id="renderGroup">
              {/* allHeros function rendered here */}
              {this.allHeros()}

              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1 id="totalDiv">Total: {checkout}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12" id="confirmButton">
                    <button
                      className="btn btn-outline-dark my-2 my-sm-0"
                      onClick={this.handleFormSubmit}
                    >
                    {/* I use React-Router to control routing. I have declared the paths in App.js */}
                      <Link
                        style={{ textDecoration: "none", color: "#343A40" }}
                        to="/confirm"
                      >
                        {" "}
                        Continue
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroService;
