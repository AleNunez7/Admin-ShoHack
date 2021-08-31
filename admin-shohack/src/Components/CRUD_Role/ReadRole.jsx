import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function ReadRole() {
  const [roles, setRoles] = useState([]);
  const user = useSelector((state) => state.user);

  function handleRoleDelete(roleToDelete) {
    axios({
      method: "delete",
      url: "http://localhost:8000/role/" + roleToDelete._id,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setRoles((roles) => roles.filter((role) => role._id !== roleToDelete._id));
  }

  useEffect(() => {
    const getRole = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/role",
        data: { roles },
      });
      setRoles(response.data);
    };
    getRole();
  }, []);
  return (
    <div className="d-flex justify-content">
      <div>
        <SidebarMenu />
      </div>
      <div className="mx-auto w-100 p-2">
        <p className="text-center fw-bold fs-3">ROLE</p>
        <Link to={"/role/crear"} className="btn btn-primary text-white me-2">
          Agregar Role
        </Link>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => {
              return (
                <tr>
                  <th>{role.name}</th>
                  <th>
                    <Link
                      to={`/role/modificar/${role._id}`}
                      className="btn btn-primary text-white me-2"
                    >
                      <i class="fas fa-edit"></i>
                    </Link>

                    <button
                      onClick={() => handleRoleDelete(role)}
                      className="btn btn-danger text-white"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReadRole;
