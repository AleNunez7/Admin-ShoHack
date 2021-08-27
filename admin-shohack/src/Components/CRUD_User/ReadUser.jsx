import SidebarMenu from "../Dashboard/SidebarMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

function ReadUser() {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);

  function handleUserDelete(userToDelete) {
    axios({
      method: "delete",
      url: "http://localhost:8000/users/" + userToDelete._id,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setUsers((users) => users.filter((user) => user._id !== userToDelete._id));
  }

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setUsers(response.data.users);
    };
    getUser();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <SidebarMenu />
        </div>
        <div className="col-sm-9">
          <p className="text-center fw-bold fs-3 py-3">USUARIOS</p>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Role</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <th>{user.firstname}</th>
                    <th>{user.lastname}</th>
                    <th>{user.username}</th>
                    <th>{user.email}</th>
                    <th>{user.role.name}</th>

                    <th>
                      <Link
                        to={`/usuario/modificar/${user._id}`}
                        className="btn btn-primary text-white me-2"
                      >
                        <i class="fas fa-edit"></i>
                      </Link>

                      <button
                        onClick={() => handleUserDelete(user)}
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
    </>
  );
}

export default ReadUser;
