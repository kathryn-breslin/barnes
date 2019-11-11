import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Confirmation from "../src/pages/Confirmation/Confirmation"
import Form from "../src/components/Form/Form";

function App() {

  //Installed React-Router to control routes
  //I structure those routes here
  //In the future I would need to make these routes controlled so that the user cannot click through the 'Confirmation page' without having atleast 1 hero quantity in the HeroService component
  return (
    <Router>
      <div>
        <Route exact path="/" component={Form}/>
        <Route exact path="/confirm" component={Confirmation}/>
      </div>
    </Router>
  );
}

export default App;
