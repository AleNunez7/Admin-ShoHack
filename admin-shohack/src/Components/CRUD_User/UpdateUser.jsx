import React from "react";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function UpdateUser() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [firstname, setFisrtname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [roles, setRoles] = useState([]);
  console.log(role);
  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/users/" + params.id,
      });
      setFisrtname(response.data.firstname);
      setLastname(response.data.lastname);
      setUsername(response.data.username);
      setEmail(response.data.email);
      setRole(response.data.role);
    };
    getUser();
  }, []);

  async function handleUserUpdate(ev) {
    ev.preventDefault();

    const response = await axios({
      method: "PATCH",
      url: "http://localhost:8000/users/" + params.id,
      data: { firstname, lastname, username, email, role },
    });
    history.push("/usuario");
  }

  useEffect(() => {
    const getRole = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/role",
        data: { role },
      });
      setRoles(response.data);
    };

    getRole();
  }, []);
  console.log(user);
  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <SidebarMenu />
        </div>
        <div className="col-sm-9">
          <div className="border p-2">
            <h2 className="text-center fw-bold"> MODFICAR USUARIO</h2>
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
              >
                {roles.map((item) => {
                  return role === item._id.toString() ? (
                    <option value={item._id} selected>
                      {item.name}
                    </option>
                  ) : (
                    <option value={item._id}>{item.name}</option>
                  );
                })}
              </select>
              <br />
              <button class="btn btn-success mt-2">UPDATE</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;
