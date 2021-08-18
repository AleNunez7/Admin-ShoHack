import React from "react";

function Dashboard() {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Company name
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#">
              Sign out
            </a>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    <i class="fas fa-home"></i> Dashboard
                  </a>
                </li>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="far fa-file"></i> Categories
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a class="dropdown-item" href="/create-category">
                        Create Category
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/read-category">
                        Read Category
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/update-category">
                        Update Category
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/delete-category">
                        Delete Category
                      </a>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <div class="dropdown">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fas fa-shopping-cart"></i> Products
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <a class="dropdown-item" href="/create-products">
                          Create Products
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/read-products">
                          Read Products
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/update-products">
                          Update Products
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/delete-products">
                          Delete Products
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <div class="dropdown">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fas fa-users"></i> Users
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <a class="dropdown-item" href="/create-user">
                          Create Users
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/read-user">
                          Read Users
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/update-user">
                          Update Users
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/delete-user">
                          Delete Users
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
