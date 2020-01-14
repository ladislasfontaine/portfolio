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
          <Route path="/" exact component={Work} />
          <Route path="/about" component={About} />
          <Route path="/project/:id" component={Project} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
