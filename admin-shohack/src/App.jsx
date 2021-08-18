import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Admin from "./Components/Admin/Admin";
import Dashboard from "./Components/Dashboard/Dashboard";
import Test from "./Test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/test" component={Test} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
