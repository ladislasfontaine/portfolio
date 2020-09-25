import React from "react";
import "./App.css";
import Nav from "./Nav";
import Pattern from "./Pattern";
import Work from "./Work";
import About from "./About";
import Project from "./Project";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav />
        <Pattern />
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Work} />
          <Route path={process.env.PUBLIC_URL + "/about/"} component={About} />
          <Route path={process.env.PUBLIC_URL + "/project/:id/"} component={Project} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
