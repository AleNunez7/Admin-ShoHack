import React from "react";

function SidebarMenu() {
  return (
    <div className="">
      <a className="text-dark fw-bold text-decoration-none" href="/dashboard">
        <i class="fas fa-home"></i> Dashboard
      </a>

      <a class="dropdown-item" href="/producto/crear">
        Crear categoría
      </a>

      <a class="dropdown-item" href="/producto/crear">
        Crear Producto
      </a>
    </div>
  );
}

export default SidebarMenu;
