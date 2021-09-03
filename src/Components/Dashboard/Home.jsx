import React from "react";
import SidebarMenu from "./SidebarMenu";

function Home() {
  return (
    <div className="d-flex justify-content">
      <div>
        <SidebarMenu />
      </div>

      <div className="mx-auto w-100 p-2">
        <h2 className="text-center fw-bold fs-3">ADMINISTRADOR SHOHACK</h2>
      </div>
    </div>
  );
}

export default Home;
