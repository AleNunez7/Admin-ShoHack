import React from "react";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function UpdateRole() {
  const [name, setName] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const getRole = async () => {
      const response = await axios({
        method: "GET",
        url: process.env.REACT_APP_API_URL + "/role/" + params.id,
      });
      console.log(response.data);
      setName(response.data.name);
    };
    getRole();
  }, []);

  async function handleUpdate(ev) {
    ev.preventDefault();
    const response = await axios({
      method: "PATCH",
      url: "process.env.REACT_APP_API_URL + "/role/" + params.id,
      data: { name },
    });
    history.push("/role");
  }

  return (
    <div className="d-flex justify-content">
      <div>
        <SidebarMenu />
      </div>
      <div className="mx-auto w-50 p-2">
        <div className="p-2">
          <h2 className="text-center fw-bold"> MODFICAR ROLE</h2>
          <form onSubmit={(ev) => handleUpdate(ev)}>
            <label htmlFor="">Nombre</label>
            <input
              className="w-100 mt-2"
              type="text"
              name="name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <button class="btn btn-success mt-2">UPDATE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRole;
