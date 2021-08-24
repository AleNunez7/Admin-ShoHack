import React from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const user = useSelector((state) => state.user);
  const username = user.username;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">ShoHack Admin Panel</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="align-items-end">
          <div
            className="collapse navbar-collapse  align-items-center"
            id="navbarScroll"
          >
            <p className="me-3 fw-bold text-uppercase">{username}</p>
            <button className="btn btn-outline-success" type="submit">
              Log Out
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Dashboard;
