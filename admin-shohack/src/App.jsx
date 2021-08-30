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
import ReadRole from "./Components/CRUD_Role/ReadRole";
import CreateRole from "./Components/CRUD_Role/CreateRole";
import UpdateRole from "./Components/CRUD_Role/UpdateRole";

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
          <PrivateRoute component={CreateRole} path="/role/crear" />
          <PrivateRoute component={ReadRole} path="/role" />
          <PrivateRoute component={UpdateRole} path="/role/modificar/:id" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
