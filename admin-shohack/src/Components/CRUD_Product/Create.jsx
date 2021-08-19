import React from "react";
import Navbar from "../Dashboard/Navbar";
import SidebarMenu from "../Dashboard/SidebarMenu";

function Create() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <SidebarMenu />
          </div>
          <div className="col-sm-9">
            <div className="border p-2">
              <h2 className="text-center fw-bold"> CREAR PRODUCTO</h2>
              <form onSubmit="">
                <label htmlFor="">Nombre</label>
                <input className="w-100 mt-2" type="text" name="name" />

                <label htmlFor="">Descripción</label>
                <input className="w-100 mt-2" type="text" name="description" />

                <label htmlFor="">image</label>
                <input className="w-100 mt-2" type="file" name="image" />

                <label htmlFor="">Precio</label>
                <input className="w-100 mt-2" type="text" name="price" />

                <label htmlFor="">Stock</label>
                <input className="w-100 mt-2" type="text" name="stock" />

                <label htmlFor="">Categoría</label>
                <input className="w-100 mt-2" type="text" name="category" />

                <button class="btn btn-success mt-2">CREAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
