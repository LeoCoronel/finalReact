import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="orderCard">
      <p className="orderCard__Id">ID de la orden: {order.id.slice(0, 7)}</p>
      <p className="orderCard__Date">Fecha {order.createdAt}</p>
      <p className="orderCard__Total">$ {order.total}</p>
    </div>
  );
};

export default OrderCard;
