import React from "react";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function SidebarMenu() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-column p-3 text-white bg-dark sideBarMenu">
      <a
        href="/dashboard"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi" width="40" height="32"></svg>
        <span className="fs-4">SHOHACK</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto fs-5">
        <li className="nav-item">
          <a
            href="/dashboard"
            className="nav-link text-white"
            aria-current="page"
          >
            <svg className="bi me-2" width="16" height="16"></svg>
            Home
          </a>
        </li>
        <li>
          <Link to="/orden" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"></svg>
            Ordenes
          </Link>
        </li>
        <li>
          <Link to="/producto" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"></svg>
            Productos
          </Link>
        </li>
        <li>
          <Link to="/usuario" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"></svg>
            Usuario
          </Link>
        </li>
        <li>
          <Link to="/role" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"></svg>
            Role
          </Link>
        </li>
      </ul>
      <hr />

      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {user.username}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            className="ps-2"
            onClick={() => dispatch({ type: "REMOVE_USER" })}
            href="#/action-1"
          >
            Log out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SidebarMenu;
