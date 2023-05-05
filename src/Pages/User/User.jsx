import React, { useEffect } from "react";
import { auth } from "../../firebase/firebase-utils";
import { useDispatch, useSelector } from "react-redux";
import * as orderActions from "./../../redux/slices/orders/orders-actions";
import OrderCard from "../../Components/OrderCard/OrderCard";

const User = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { orders, error } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders) {
      dispatch(orderActions.getFullOrders(currentUser?.id));
    }

    if (!currentUser?.id) {
      dispatch(orderActions.getOrdersFail());
    } else {
      error && dispatch(orderActions.clearError());
    }
  }, [dispatch, currentUser?.id, orders, error]);

  return (
    <div className="user">
      <h2>Mis compras:</h2>
      {orders?.map((order) => {
        return <OrderCard key={order.id} order={order} />;
      })}
      <p>{currentUser.displayName}</p>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        logout
      </button>
      {/* 1:10 */}
    </div>
  );
};

export default User;
