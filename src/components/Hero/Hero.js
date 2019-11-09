import React, { Component } from "react";
import json from "../../utils/json";

class HeroService extends Component {

    state = {
        heros: [], 
        squadName: "", 
        homeTown: "", 
        secretBase: "", 
        formed: ""
    }

    componentDidMount() {
        this.squadInfo();
    }

    squadInfo () {
        json.heros().then(res => {
            this.setState({ 
                squadName: res.data.squadName, 
                homeTown: res.data.homeTown, 
                secretBase: res.data.secretBase, 
                formed: res.data.formed
            })
        })
    }
    
    render () {

        const { squadName, homeTown, secretBase, formed } = this.state; 
        console.log("State: " + squadName)
        return (
            <div>
                <h1>Hero Section!</h1>
                

                <h1>{"Squad Name: " + squadName}</h1>
                <h2>{"Hometown:" + homeTown}</h2>
                <p>{"Secret Base: " + secretBase}</p>
                <p>{"Formed: " + formed}</p>
            </div>
        )
    }
}

export default HeroService;