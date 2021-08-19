import React from "react";
import Navbar from "./Navbar";
import SidebarMenu from "./SidebarMenu";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  function handleProductDelete(productToDelete) {
    axios({
      method: "delete",
      url: "http://localhost:8000/product/" + productToDelete._id,
    });
    setProducts((products) =>
      products.filter((product) => product._id !== productToDelete._id)
    );
  }

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/",
      });

      setProducts(response.data.products);
    };
    getProduct();
  }, []);

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
                {products.map((product) => {
                  return (
                    <tr>
                      <th>{product.name}</th>
                      <th>{product.description}</th>
                      <th>{product.image}</th>
                      <th>{product.price}</th>
                      <th>{product.stock}</th>
                      <th>{product.category}</th>
                      <th>
                        <a
                          href="/producto/modificar"
                          className="btn btn-primary p-1 text-white"
                        >
                          <i class="fas fa-edit me-3"></i>
                        </a>

                        <button
                          onClick={() => handleProductDelete(product)}
                          className="btn btn-danger p-1 text-white"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
