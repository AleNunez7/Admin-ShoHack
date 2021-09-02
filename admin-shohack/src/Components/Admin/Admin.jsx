import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8000/tokens",
        data: { username, password },
      });
      response.data.user.token = await response.data.token;
      console.log(response.data.user);
      if (response.data.user.role === "6128f0ecd447f42a783a777f") {
        dispatch({ type: "ADD_USER", payload: response.data.user });
        history.push("/dashboard");
      }
    } catch (error) {
      if (error) {
        console.log(error);
        const closeAfter7 = () =>
          toast.warning("Credenciales incorrectas, por favor vuelva a ingresar sus datos.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        closeAfter7();
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <div className="p-3 w-50">
        <form onSubmit={handleSubmit} className="container mt-4">
          <h3 className="text-center">PANEL DE ADMINISTRACION DE SHOHACK</h3>

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
            <button type="submit" className="btn btn-dark btn-block mt-4">
              Ingresar
            </button>
          </div>
        </form>
        <ToastContainer autoClose={4000} />
      </div>
    </div>
  );
}

export default Admin;
