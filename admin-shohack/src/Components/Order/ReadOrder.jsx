import React from "react";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function ReadOrder() {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/order",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response.data);
      setOrders(response.data);
    };
    getOrder();
  }, []);

  return (
    <div className="d-flex justify-content">
      <div>
        <SidebarMenu />
      </div>
      <div className="mx-auto w-100 p-2">
        <p className="text-center fw-bold fs-3">ORDENES</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Numero de orden</th>
              <th>Fecha</th>
              <th>Usuario</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr>
                  <th>{order._id}</th>
                  <th>20/07/21</th>
                  <th>{order.user}</th>
                  <th>$ {order.totalPrice}</th>
                  <th>{order.state}</th>
                  <th>
                    <Link
                      /* to={`/orden/${order._id}`} */
                      className="btn btn-primary text-white me-2"
                    >
                      Ver orden
                    </Link>
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

export default ReadOrder;
