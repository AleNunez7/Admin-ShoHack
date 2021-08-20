import React from "react";
import Navbar from "../Dashboard/Navbar";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function UpdateUser() {
  const [firstname, setFisrtname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
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

  async function handleUpdate() {
    const response = await axios({
      method: "PATCH",
      url: "http://localhost:8000/users/" + params.id,
      data: { firstname, lastname, username, email, role },
    });
    history.push("/dashboard");
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <SidebarMenu />
          </div>
          <div className="col-sm-9">
            <div className="border p-2">
              <h2 className="text-center fw-bold"> MODFICAR USUARIO</h2>
              <form onSubmit={handleUpdate}>
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
                <div className="dropdown text-center d-flex justify-content-start mt-1">
                  <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categoria
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-dark "
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Customer
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Admin
                      </a>
                    </li>
                  </ul>
                </div>
                <button class="btn btn-success mt-2">UPDATE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;
