import React from "react";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import supabase from "../../supabase";

function Create() {
  const history = useHistory();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageName, setImageName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  const handleProduct = async (ev) => {
    try {
      ev.preventDefault();
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/products",
        data: { name, description, imageName, price, stock, category },
      });
      if (response) {
        const image = ev.target[2].files[0];

        const { data, error } = await supabase.storage
          .from("image")
          .upload(`image/${image.name}`, image, {
            cacheControl: "3600",
            upsert: false,
          });
        if (error) {
          console.log(error);
        } else {
          console.log(data);
        }
      }
      setProduct(response.data);
      history.push("/dashboard");
    } catch (error) {
      setError("Error, intente nuevamente");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <SidebarMenu />
        </div>
        <div className="col-sm-9">
          <div className="border p-2">
            <h2 className="text-center fw-bold"> CREAR PRODUCTO</h2>
            <form onSubmit={handleProduct}>
              <label htmlFor="">Nombre</label>
              <input
                className="w-100 mt-2"
                type="text"
                name="name"
                value={name}
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
                multiple="false"
                onChange={(ev) => setImageName(ev.target.files[0].name)}
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

              <button class="btn btn-success mt-2">CREAR</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
