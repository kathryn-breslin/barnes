import React, { Component } from "react";
import "./Hero.css";
import json from "../../utils/json";
import CardCounter from "../Counter/Counter";
import { Link } from "react-router-dom";

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

var checkout = [];

class Counter extends Component {
  state = {
    total: 0,
    topTotal: 0
  };

  increaseValue = (event) => {
    event.preventDefault();

    this.setState(prevState => {
      if (prevState.total < 10) {
        return {
          total: prevState.total + 1
        };
      } else {
        return null;
      }
    });
    this.calculateTotal();
  };

  decreaseValue = (event) => {
    event.preventDefault();

    this.setState(prevState => {
      if (prevState.total > 0) {
        return {
          total: prevState.total - 1
        };
      } else {
        return null;
      }
    });
    this.calculateTotal();
  };

  calculateTotal() {
    // checkout += this.state.total
    //  console.log("Checkout: " + this.state.total)
    const { total, topTotal } = this.state;
    let currentTotal = 0;
    currentTotal += total;
    // this.setState({ topTotal: currentTotal})
    console.log("Current Total: " + currentTotal);
  }

  handleClick = () => {
    this.setState({
      showNumber: !this.state.showNumber
    });
  };

  handleEventChange = event => {
    event.preventDefault();
    this.setState({ total: event.target.value });
  };

  render() {
    return (
      <div>
        <div>{this.calculateTotal()}</div>

        <CardCounter
          total={this.state.total}
          increaseValue={this.increaseValue}
          decreaseValue={this.decreaseValue}
        />
        {/* //     <div className="col-auto">
      //     <button onClick={() => {this.increaseValue(index)}}className="btn">+</button>
      //     <input value={this.state.total} onChange={() => this.handleEventChange(index)}/>
      //     <button onClick={() => {this.decreaseValue(index)}}className="btn">-</button>
      //   </div> */}
      </div>
    );
  }
}

class HeroService extends Component {
  state = {
    heros: [],
    squadName: "",
    homeTown: "",
    secretBase: "",
    formed: "", 
  };

  componentDidMount() {
    this.squadInfo();
  }

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

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Submit!");
  };

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
              <Counter
              id={index}
              />
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
              {this.allHeros()}
              <button className="btn btn-outline-light my-2 my-sm-0" onClick={this.handleFormSubmit}>Continue
                {/* <Link to="/confirm"> Continue</Link> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroService;
