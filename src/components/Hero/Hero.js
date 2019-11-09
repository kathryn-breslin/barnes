import React, { Component } from "react";
import json from "../../utils/json";

const newHeros = [
{
    name: "Melinda Gates", 
    age: "55", 
    secretIdentity: "Bill & Melinda Gates Foundation", 
    powers: [
        "Kindness",
        "Empathy", 
        "Influence" 
    ]
}, 
{
    name: "Warren Buffet", 
    age: "89", 
    secretIdentity: "Berkshire Hathaway", 
    powers: [
        "Patience",
        "Dedication", 
        "Honesty" 
    ]
}, 
{
    name: "Elon Musk", 
    age: "48", 
    secretIdentity: "SpaceX", 
    powers: [
        "Productivity",
        "Creativity", 
        "Risk-tolerant" 
    ]
}, 
{
    name: "Mark Zuckerberg", 
    age: "35", 
    secretIdentity: "Facebook", 
    powers: [
        "Innovation",
        "Assertiveness", 
        "Problem-solving" 
    ]
}];

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
        heros: [...res.data.members, newHeros],
        squadName: res.data.squadName,
        homeTown: res.data.homeTown,
        secretBase: res.data.secretBase,
        formed: res.data.formed
      });
    });
  }

  render() {
    const { heros, squadName, homeTown, secretBase, formed } = this.state;
    console.log("State: " + squadName);
    console.log("Members: " + JSON.stringify(heros))
    // console.log("Members: " + heros.name)
    return (
      <div>
        <h1>Hero Section!</h1>

        <h1>{"Squad Name: " + squadName}</h1>
        <h2>{"Hometown:" + homeTown}</h2>
        <p>{"Secret Base: " + secretBase}</p>
        <p>{"Formed: " + formed}</p>
      </div>
    );
  }
}

export default HeroService;
