import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App(){
  return ( 
    <Router>
      <Header />
      <switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <TicketControl />       
        </Route>
      </switch>
    </Router>
  );
}

export default App;