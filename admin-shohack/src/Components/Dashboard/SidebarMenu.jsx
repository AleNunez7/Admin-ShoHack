import React from "react";
import "../../App.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function SidebarMenu() {
  const user = useSelector((state) => state.user);
  const [menuLogOut, setMenuLogOut] = useState(false);
  const [btnMenuLogOut, setBtnMenuLogOut] = useState(false);
  const dispatch = useDispatch();

  function handleMenuLogOut(ev) {
    console.log();
    if (
      typeof ev.target.className !== "string" ||
      !ev.target.className.includes("dropMenu")
    ) {
      setMenuLogOut(false);
      setBtnMenuLogOut(false);
    }
  }
  useEffect(() => {
    window.addEventListener("click", handleMenuLogOut);
    return () => window.removeEventListener("click", handleMenuLogOut);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setMenuLogOut(btnMenuLogOut);
    // eslint-disable-next-line
  }, [btnMenuLogOut]);

  return (
    <div className="d-flex flex-column p-3 text-white bg-dark sideBarMenu">
      <a
        href="/dashboard"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4">SHOHACK</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/dashboard" className="nav-link active" aria-current="page">
            <svg className="bi me-2" width="16" height="16"></svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"></svg>
            Ordenes
          </a>
        </li>
        <li>
          <Link to="/producto" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"></svg>
            Productos
          </Link>
        </li>
        <li>
          <Link
            to="/usuario"
            className="nav-link"
            className="nav-link text-white"
          >
            <svg className="bi me-2" width="16" height="16"></svg>
            Usuario
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>{user.username}</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <Link className="text-decoration-none" to="/admin">
            <li
              onClick={() => dispatch({ type: "REMOVE_USER" })}
              className="text-white ps-2"
            >
              Log Out
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SidebarMenu;
