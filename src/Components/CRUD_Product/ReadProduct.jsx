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
      url: process.env.REACT_APP_API_URL + "/products/" + productToDelete._id,
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
        url: process.env.REACT_APP_API_URL,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setProducts(response.data.products);
    };
    getProduct();
  }, [user.token]);

  return (
    <div className="d-flex justify-content">
      <div>
        <SidebarMenu />
      </div>
      <div className="mx-auto w-100 p-2">
        <p className="text-center fw-bold fs-3">PRODUCTOS</p>
        <Link to={"/producto/crear"} className="btn btn-dark text-white me-2">
          Agregar producto
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Image</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoría</th>
              <th className="actionWidth">Acción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product._id}>
                  <th>{product.name}</th>
                  <th>{product.description}</th>
                  <th>{product.imageName}</th>
                  <th>{product.price}</th>
                  <th>{product.stock}</th>
                  <th>{product.category}</th>
                  <th className="actionWidth">
                    <Link
                      to={`/producto/modificar/${product._id}`}
                      className="btn btn-dark text-white me-2"
                    >
                      <i className="fas fa-edit"></i>
                    </Link>

                    <button
                      onClick={() => {
                        if (
                          window.confirm("¿Está seguro de borrar el producto?")
                        )
                          handleProductDelete(product);
                      }}
                      className="btn btn-danger text-white"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReadProduct;
