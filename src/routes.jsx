import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import * as P from "./pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={P.HomePage} />
        <Route path="/map" component={P.MapPage}  />
        
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
};

export default Routes;
