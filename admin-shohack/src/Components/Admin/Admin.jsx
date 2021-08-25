import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Admin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handlePassword = (ev) => {
    setPassword(String(ev.target.value));
  };
  const handleUsername = (ev) => {
    setUsername(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:8000/tokens",
      data: { username, password },
    });
    response.data.user.token = await response.data.token;
    dispatch({ type: "ADD_USER", payload: response.data.user });
    history.push("/dashboard");
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <div className="border p-3 w-50">
        <form onSubmit={handleSubmit} className="container mt-4">
          <h3 className="text-center">PANEL DE ADMINISTRACION</h3>

          <div className="form-group mt-4">
            <label>Usuario</label>
            <input
              value={username}
              onChange={handleUsername}
              type="text"
              className="form-control"
              placeholder="Ingrese usuario"
            />
          </div>

          <div className="form-group mt-4">
            <label>Contraseña</label>
            <input
              value={password}
              onChange={handlePassword}
              type="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block mt-4">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
