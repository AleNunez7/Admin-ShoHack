import React from "react";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function UpdateUser() {
  const user = useSelector((state) => state.user);
  const [firstname, setFisrtname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [roles, setRoles] = useState([]);
  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: process.env.REACT_APP_API_URL + "/users/" + params.id,
      });
      setFisrtname(response.data.firstname);
      setLastname(response.data.lastname);
      setUsername(response.data.username);
      setEmail(response.data.email);
      setRole(response.data.role);
    };
    getUser();
  }, [params.id]);

  async function handleUserUpdate(ev) {
    ev.preventDefault();

    await axios({
      method: "PATCH",
      url: process.env.REACT_APP_API_URL + "/users/" + params.id,
      data: { firstname, lastname, username, email, role },
    });
    history.push("/usuario");
  }

  useEffect(() => {
    const getRole = async () => {
      const response = await axios({
        method: "GET",
        url: process.env.REACT_APP_API_URL + "/role",
        data: { role },
      });
      setRoles(response.data);
    };

    getRole();
  }, [role]);
  return (
    <div className="d-flex justify-content">
      <div>
        <SidebarMenu />
      </div>
      <div className="mx-auto w-50 p-2">
        <div className="p-2">
          <h2 className="text-center fw-bold"> MODIFICAR USUARIO</h2>
          <form onSubmit={(ev) => handleUserUpdate(ev)}>
            <label htmlFor="">Nombre</label>
            <input
              className="w-100 mt-2"
              type="text"
              name="firstname"
              value={firstname}
              onChange={(ev) => setFisrtname(ev.target.value)}
            />

            <label htmlFor="">Apellido</label>
            <input
              className="w-100 mt-2"
              type="text"
              name="lastname"
              value={lastname}
              onChange={(ev) => setLastname(ev.target.value)}
            />

            <label htmlFor="">Usuario</label>
            <input
              className="w-100 mt-2"
              type="text"
              name="username"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />

            <label htmlFor="">Email</label>
            <input
              className="w-100 mt-2"
              type="text"
              name="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />

            <label htmlFor="">Role</label>
            <br />
            <select
              onChange={(ev) => setRole(ev.target.value)}
              className="btn btn-dark dropdown-toggle"
              name="role"
              id="role"
              defaultValue={user.role}
            >
              {roles.map((item) => {
                return role === item._id.toString() ? (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ) : (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <br />
            <button className="btn btn-success mt-2">UPDATE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
