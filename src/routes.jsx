import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import {HomePage, MapPage} from "./pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/map" component={MapPage}  />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
};

export default Routes;
