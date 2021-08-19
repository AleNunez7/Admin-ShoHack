import React from "react";
import Navbar from "../Dashboard/Navbar";
import SidebarMenu from "../Dashboard/SidebarMenu";

import { useSelector } from "react-redux";

function Update() {
  const product = useSelector((state) => state);
  console.log(product);

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
                <input
                  className="w-100 mt-2"
                  type="text"
                  name="name"
                  value={product.name}
                  /*     onChange={(ev) => setName(ev.target.value)} */
                />

                <label htmlFor="">Descripción</label>
                <input
                  className="w-100 mt-2"
                  type="text"
                  name="description"
                  value={product.description}
                  /* onChange={(ev) => setDescription(ev.target.value)} */
                />

                <label htmlFor="">Imagen</label>
                <input
                  className="w-100 mt-2"
                  type="file"
                  name="image"
                  value={product.image}
                  /*    onChange={(ev) => setImage(ev.target.value)} */
                />

                <label htmlFor="">Precio</label>
                <input
                  className="w-100 mt-2"
                  type="text"
                  name="price"
                  value={product.price}
                  /* onChange={(ev) => setPrice(ev.target.value)} */
                />

                <label htmlFor="">Stock</label>
                <input
                  className="w-100 mt-2"
                  type="text"
                  name="stock"
                  value={product.stock}
                  /*  onChange={(ev) => setStock(ev.target.value)} */
                />

                <label htmlFor="">Categoría</label>
                <input
                  className="w-100 mt-2"
                  type="text"
                  name="category"
                  value={product.category}
                  /* onChange={(ev) => setCategory(ev.target.value)} */
                />

                <button class="btn btn-success mt-2">CREAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
