import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Dashboard/Home";
import Create from "./Components/CRUD_Product/Create";
import UpdateProduct from "./Components/CRUD_Product/UpdateProduct";
import ReadProduct from "./Components/CRUD_Product/ReadProduct";
import UpdateUser from "./Components/CRUD_User/UpdateUser";
import ReadUser from "./Components/CRUD_User/ReadUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route path="/dashboard" component={Home} />
          <Route path="/producto/crear" component={Create} />
          <Route path="/producto/modificar/:id" component={UpdateProduct} />
          <Route path="/producto" component={ReadProduct} />
          <Route path="/usuario/modificar/:id" component={UpdateUser} />
          <Route path="/usuario" component={ReadUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
