import React from 'react';
import "./App.css"
import Navbar from "./component/Navbar";
import Feedss from "./component/Feedss";
import Feeds from "./component/Feeds";
import Feeds2 from "./component/Feeds2";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Feeds" component={Feeds}>
            <Feeds />
          </Route>
          <Route path="/Feeds2" component={Feeds2}>
            <Feeds2 />
          </Route>
          <Route path="/Feedss" component={Feedss}>
            <Feedss />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default NavBar;