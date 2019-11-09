import React, { Component } from "react";
import json from "../../utils/json";

class HeroService extends Component {

    squadInfo () {
        json.heros().then(res => {
            console.log("This is the object:" + JSON.stringify(res));
        })
    }
    
    render () {
        return (
            <div>
                <h1>Hero!</h1>
                {this.squadInfo()}
            </div>
        )
    }
}

export default HeroService;