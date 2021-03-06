import React from "react";
import SidebarMenu from "../Dashboard/SidebarMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { Modal, Button } from "react-bootstrap";

function ReadOrder() {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user);
  const [Show, setShow] = useState(false);
  const [clickedOrder, setClickedOrder] = useState({});
  let orderList = clickedOrder.orderList;

  const showOrderModal = (order) => {
    setClickedOrder(order);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios({
        method: "GET",
        url: process.env.REACT_APP_API_URL + "/order",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setOrders(response.data);
    };
    getOrder();
  }, [user.token]);

  return (
    <>
      <div className="d-flex justify-content">
        <div>
          <SidebarMenu />
        </div>
        <div className="mx-auto w-100 p-2">
          <p className="text-center fw-bold fs-3">ORDENES</p>
          <table className="table table-striped">
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
                  <tr key={order._id}>
                    <th>{order._id}</th>
                    <th>{order.date}</th>
                    <th>{order.user}</th>
                    <th>$ {order.totalPrice}</th>
                    <th>{order.state}</th>
                    <th>
                      <button
                        className="btn btn-dark text-white"
                        onClick={() => showOrderModal(order)}
                      >
                        Ver orden
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        show={Show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ORDEN N: {clickedOrder._id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            {clickedOrder.user} - {clickedOrder.date}
          </h4>
          <hr />
          {orderList &&
            orderList.map((order) => {
              return (
                <div key={order._id} className="py-2 ms-3">
                  <p className="fw-bold">{order.name}</p>
                  <p>$ {order.price}</p>
                  <p>Cantidad: {order.quantity}</p>
                </div>
              );
            })}
          <hr />
          <p className="fw-bold">TOTAL: $ {clickedOrder.totalPrice}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark text-white" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReadOrder;
