import React from "react";
import SidebarMenu from "./SidebarMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <SidebarMenu />
        </div>

        <div className="col-sm-6 mt-5">
          <h2>ADMINISTRADOR</h2>
          <img src="grafica-circular.png " alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
