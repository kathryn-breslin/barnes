import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Confirmation from "../src/pages/Confirmation/Confirmation"
import Form from "../src/components/Form/Form";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Form}/>
        <Route exact path="/confirm" component={Confirmation}/>
      </div>
    </Router>
    // <div className="App">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-12">
    //         <Form />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
