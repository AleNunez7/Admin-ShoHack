import React from "react";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import supabase from "../../supabase";

function Create() {
  const history = useHistory();
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
        url: process.env.REACT_APP_API_URL + "/products",
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
      history.push("/producto");
    } catch (error) {
      alert("Error, intente nuevamente");
    }
  };

  return (
    <div className="d-flex justify-content">
      <div>
        <SidebarMenu />
      </div>
      <div className="mx-auto w-50 p-2">
        <div className=" p-2">
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

            <button className="btn btn-success mt-2">CREAR</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
