import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Dashboard/Home";
import Create from "./Components/CRUD_Product/Create";
import UpdateProduct from "./Components/CRUD_Product/UpdateProduct";
import ReadProduct from "./Components/CRUD_Product/ReadProduct";
import UpdateUser from "./Components/CRUD_User/UpdateUser";
import ReadUser from "./Components/CRUD_User/ReadUser";
import PrivateRoute from "./Components/Route/PrivateRoute";
import PublicRoute from "./Components/Route/PublicRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PublicRoute
            restricted={true}
            component={Admin}
            path="/admin"
            exact
          />
          <PrivateRoute component={Home} path="/dashboard" />
          <PrivateRoute component={Create} path="/producto/crear" />
          <PrivateRoute
            component={UpdateProduct}
            path="/producto/modificar/:id"
          />
          <PrivateRoute component={ReadProduct} path="/producto" />
          <PrivateRoute component={UpdateUser} path="/usuario/modificar/:id" />
          <PrivateRoute component={ReadUser} path="/usuario" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
