import { useState } from "react";
import { CartCard } from "../CartCard/CartCard";
import styles from "./Cart.module.css";
import { useCartContextValue } from "../../cartContext";

export const Cart = () => {
  const { cart } = useCartContextValue();
  return (
    <>
      <h1 className={styles.text}>
        {cart.length ? "Items in your Cart" : "No items in the cart"}
      </h1>
      <div className={styles.container}>
        {cart.map((item) => {
          return (
            <>
              <CartCard item={item} />
            </>
          );
        })}
      </div>
    </>
  );
};
