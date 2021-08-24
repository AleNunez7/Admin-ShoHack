import React from "react";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

function ReadProduct() {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.user);

  function handleProductDelete(productToDelete) {
    axios({
      method: "delete",
      url: "http://localhost:8000/products/" + productToDelete._id,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
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
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setProducts(response.data.products);
    };
    getProduct();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <SidebarMenu />
        </div>
        <div className="col-sm-9">
          <p className="text-center fw-bold fs-3">PRODUCTOS</p>
          <Link
            to={"/producto/crear"}
            className="btn btn-primary text-white me-2"
          >
            Agregar producto
          </Link>
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
                    <th>{product.imageName}</th>
                    <th>{product.price}</th>
                    <th>{product.stock}</th>
                    <th>{product.category}</th>
                    <th>
                      <Link
                        to={`/producto/modificar/${product._id}`}
                        className="btn btn-primary text-white me-2"
                      >
                        <i class="fas fa-edit"></i>
                      </Link>

                      <button
                        onClick={() => handleProductDelete(product)}
                        className="btn btn-danger text-white"
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
    </>
  );
}

export default ReadProduct;
