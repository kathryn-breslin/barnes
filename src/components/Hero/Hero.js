import React, { Component } from "react";
import "./Hero.css";
import json from "../../utils/json";
import Card from "../Card/Card";
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

var checkout = 0;

class Counter extends Component {
  state = {
    total: 0,
    topTotal: 0
  };

  increaseValue = () => {
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

  decreaseValue = () => {
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
    this.setState({ total: event.target.value });
  };

  render() {
    return (
      <div>
        <div>Total: {this.calculateTotal()}</div>

        <Card
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
    formed: ""
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
    // console.log("Heros: " + heros);

    const herosList = heros.map((item, index) => {
      return (
        <div className="row">
          <div className="col-12">
            <div className="card" key={item}>
              <div className="card-body">
                {item.name + "/" + item.secretIdentity} ||{" "}
                {"Super Powers: " + item.powers}
                {console.log("Index: " + index)}
              </div>
              <Counter />
            </div>
          </div>
        </div>
      );
    });
    return <ul>{herosList}</ul>;
  }

  render() {
    const { heros, squadName, homeTown, secretBase, formed } = this.state;
    // console.log("State: " + squadName);
    // console.log("Members: " + JSON.stringify(heros))
    // console.log("Members: " + heros.name)
    return (
      <div>
        <h1>Hero Section!</h1>

        <h1>{"Squad Name: " + squadName}</h1>
        <h2>{"Hometown:" + homeTown}</h2>
        <p>{"Secret Base: " + secretBase}</p>
        <p>{"Formed: " + formed}</p>

        <div id="renderGroup">
          {this.allHeros()}
          <button
            className="btn btn-outline-light my-2 my-sm-0">
            <Link to="/confirm"> Continue</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default HeroService;
