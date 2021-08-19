import React from "react";
import Navbar from "./Navbar";
import SidebarMenu from "./SidebarMenu";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-3 bg-light">
            <SidebarMenu />
          </div>
          <div className="col-sm-9">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Image</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Categoría</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Nike</th>
                  <th>lorem</th>
                  <th>Image</th>
                  <th>2500</th>
                  <th>20</th>
                  <th>Deporte</th>
                  <th>
                    <i class="fas fa-edit me-3"></i>
                    <i class="fas fa-trash"></i>
                  </th>
                </tr>
                {/*  {products.map((product) => {
                  return (
                    <tr>
                      <th>{product.name}</th>
                      <th>{product.description}</th>
                      <th>{product.image}</th>
                      <th>{product.price}</th>
                      <th>{product.stock}</th>
                      <th>{product.category}</th>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
