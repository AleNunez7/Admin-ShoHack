import React from "react";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CreateRole() {
  const [name, setName] = useState("");
  return (
    <div className="d-flex justify-content">
      <div>
        <SidebarMenu />
      </div>
      <div className="mx-auto w-50 p-2">
        <div className=" p-2">
          <h2 className="text-center fw-bold">CREAR ROLE</h2>
          <form onSubmit="">
            <label htmlFor="">Nombre</label>
            <input
              className="w-100 mt-2"
              type="text"
              name="name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <button class="btn btn-success mt-2">CREAR</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateRole;
