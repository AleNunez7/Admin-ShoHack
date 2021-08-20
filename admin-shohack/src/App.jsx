import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Dashboard/Home";
import Create from "./Components/CRUD_Product/Create";
import UpdateProduct from "./Components/CRUD_Product/UpdateProduct";
import UpdateUser from "./Components/CRUD_User/UpdateUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route path="/dashboard" component={Home} />
          <Route path="/producto/crear" component={Create} />
          <Route path="/producto/modificar/:id" component={UpdateProduct} />
          <Route path="/usuario/modificar/:id" component={UpdateUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
