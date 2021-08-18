import React from "react";

function Admin() {
  return (
    <form className="container mt-4">
      <h3 className="text-center">Admin Panel</h3>

      <div className="form-group mt-4">
        <label>Usuario</label>
        <input type="email" className="form-control" placeholder="Ingrese usuario" />
      </div>

      <div className="form-group mt-4">
        <label>Contraseña</label>
        <input type="password" className="form-control" placeholder="Ingrese email" />
      </div>

      <button type="submit" className="btn btn-primary btn-block mt-4" onClick="">
        Ingresar
      </button>
    </form>
  );
}

export default Admin;
