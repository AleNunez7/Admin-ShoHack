import React from "react";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function UpdateProduct() {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/products/" + params.id,
      });
      setName(response.data.name);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setStock(response.data.stock);
      setCategory(response.data.category);
    };
    getProduct();
  }, []);

  async function handleUpdate(ev) {
    ev.preventDefault();
    const response = await axios({
      method: "PATCH",
      url: "http://localhost:8000/products/" + params.id,
      data: { name, description, price, stock, category },
    });
    console.log("entre aca");
    setProduct(response.data);
    history.push("/producto");
  }

  return (
    <div className="d-flex justify-content">
      <div>
        <SidebarMenu />
      </div>
      <div className="mx-auto w-50 p-2">
        <div className="p-2">
          <h2 className="text-center fw-bold"> MODFICAR PRODUCTO</h2>
          <form onSubmit={(ev) => handleUpdate(ev)}>
            <label htmlFor="">Nombre</label>
            <input
              className="w-100 mt-2"
              type="text"
              name="name"
              value={name && name}
              onChange={(ev) => setName(ev.target.value)}
            />

            <label htmlFor="">Descripción</label>
            <input
              className="w-100 mt-2"
              type="text"
              name="description"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />

            <label htmlFor="">Imagen</label>
            <input
              className="w-100 mt-2"
              type="file"
              name="image"
              value={image}
              onChange={(ev) => setImage(ev.target.value)}
            />

            <label htmlFor="">Precio</label>
            <input
              className="w-100 mt-2"
              type="text"
              name="price"
              value={price}
              onChange={(ev) => setPrice(ev.target.value)}
            />

            <label htmlFor="">Stock</label>
            <input
              className="w-100 mt-2"
              type="text"
              name="stock"
              value={stock}
              onChange={(ev) => setStock(ev.target.value)}
            />

            <label htmlFor="">Categoría</label>
            <input
              className="w-100 mt-2"
              type="text"
              name="category"
              value={category}
              onChange={(ev) => setCategory(ev.target.value)}
            />

            <button class="btn btn-success mt-2">UPDATE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
