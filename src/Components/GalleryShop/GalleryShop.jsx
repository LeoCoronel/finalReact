import React, { useEffect, useState } from "react";
import ShoeCard from "../ShoeCard/ShoeCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchShoes } from "../../redux/slices/shoesSlice";
import { addToCart } from "../../redux/slices/cartSlice";

const GalleryShop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoes());
  }, [dispatch]);

  const shoes = useSelector((state) => state.shoes.data);

  const onAdd = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    if (shoes) {
      localStorage.setItem("shoes", JSON.stringify(shoes));
    }
  }, [shoes]);

  return (
    <div className="shop__shoes">
      {shoes ? (
        shoes?.map((shoe) => {
          return <ShoeCard key={shoe.id} shoe={shoe} onAdd={onAdd} />;
        })
      ) : (
        <p>buscando</p>
      )}
    </div>
  );
};

export default GalleryShop;
