import React from "react";
import Navbar from "./Navbar";
import SidebarMenu from "./SidebarMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);
  console.log(user);

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

  function handleUserDelete(userToDelete) {
    axios({
      method: "delete",
      url: "http://localhost:8000/users/" + userToDelete._id,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setUsers((users) => users.filter((user) => user._id !== userToDelete._id));
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
      setUsers(response.data.users);
    };
    getProduct();
  }, []);

  return (
    <>
      <div>
        <SidebarMenu />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center fw-bold fs-3">PRODUCTOS</p>
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
                          href={`/producto/modificar/${product._id}`}
                          className="btn btn-primary text-white me-2"
                        >
                          <i class="fas fa-edit"></i>
                        </a>

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
            <p className="text-center fw-bold fs-3 my-3">USUARIOS</p>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Usuario</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <th>{user.firstname}</th>
                      <th>{user.lastname}</th>
                      <th>{user.username}</th>
                      <th>{user.email}</th>
                      <th>{user.role}</th>

                      <th>
                        <a
                          href={`/usuario/modificar/${user._id}`}
                          className="btn btn-primary text-white me-2"
                        >
                          <i class="fas fa-edit"></i>
                        </a>

                        <button
                          onClick={() => handleUserDelete(user)}
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
      </div>
    </>
  );
}

export default Home;
