import React from "react";

function Test() {
  return (
    <div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="/">
              Create Category
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/">
              Read Category
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/">
              Update Category
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/">
              Delete Category
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Test;
