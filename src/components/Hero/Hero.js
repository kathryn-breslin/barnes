import React, { Component } from "react";
import json from "../../utils/json";

class HeroService extends Component {

    state = {
        heros: {
            squadName: ""
        }
    }

    squadInfo () {
        json.heros().then(res => {
            // console.log("This is the object:" + JSON.stringify(res));
            console.log( "Squad Name: " + res.data);
            this.setState({ heros: res.data })
        })
    }
    
    render () {

        const { heros } = this.state; 

        return (
            <div>
                <h1>Hero!</h1>
                {this.squadInfo()}
                

                {"Squad Name: " + heros.squadName}
            </div>
        )
    }
}

export default HeroService;