import React from "react";
import Navbar from "../Dashboard/Navbar";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Update() {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/products/" + params.id,
      });
      console.log(response.data);
      setProduct(response.data);
    };
    getProduct();
  }, []);

  useEffect(() => {
    const patchProduct = async () => {
      const response = await axios({
        method: "PATCH",
        url: "http://localhost:8000/products/" + params.id,
      });
      console.log(response);
    };
    patchProduct();
  }, []);

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
              <h2 className="text-center fw-bold"> MODFICAR PRODUCTO</h2>
              <form onSubmit="">
                <label htmlFor="">Nombre</label>
                <input
                  className="w-100 mt-2"
                  type="text"
                  name="name"
                  /*  value={name} */
                  /*     onChange={(ev) => setName(ev.target.value)} */
                />

                <label htmlFor="">Descripción</label>
                <input
                  className="w-100 mt-2"
                  type="text"
                  name="description"
                  /*  value={description} */
                  /* onChange={(ev) => setDescription(ev.target.value)} */
                />

                <label htmlFor="">Imagen</label>
                <input
                  className="w-100 mt-2"
                  type="file"
                  name="image"
                  /*  value={image} */
                  /*    onChange={(ev) => setImage(ev.target.value)} */
                />

                <label htmlFor="">Precio</label>
                <input
                  className="w-100 mt-2"
                  type="text"
                  name="price"
                  /*  value={price} */
                  /* onChange={(ev) => setPrice(ev.target.value)} */
                />

                <label htmlFor="">Stock</label>
                <input
                  className="w-100 mt-2"
                  type="text"
                  name="stock"
                  /* value={stock} */
                  /*  onChange={(ev) => setStock(ev.target.value)} */
                />

                <label htmlFor="">Categoría</label>
                <input
                  className="w-100 mt-2"
                  type="text"
                  name="category"
                  /*  value={category} */
                  /* onChange={(ev) => setCategory(ev.target.value)} */
                />

                <button
                  /* onClick={() => handleUpdate} */
                  class="btn btn-success mt-2"
                >
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
