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
    <form onSubmit={handleSubmit} className="container mt-4">
      <h3 className="text-center">Admin Panel</h3>

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

      <button
        type="submit"
        className="btn btn-primary btn-block mt-4"
        onClick=""
      >
        Ingresar
      </button>
    </form>
  );
}

export default Admin;
