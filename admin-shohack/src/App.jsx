import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Dashboard/Home";
import Create from "./Components/CRUD_Product/Create";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route path="/dashboard" component={Home} />
          <Route path="/producto/crear" component={Create} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
