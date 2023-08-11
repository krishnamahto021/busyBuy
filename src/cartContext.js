import { createContext, useContext, useState } from "react";
import { useUserContextValue } from "./userAuthenticationContext";
import { toast } from "react-toastify";
import { db } from "./firebaseinit";
import { doc,updateDoc } from "firebase/firestore";

const cartContext = createContext();

export function useCartContextValue() {
  const value = useContext(cartContext);
  return value;
}

export function CustomCartContext({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const { user } = useUserContextValue();

  async function handleAddToCart(product) {
    if (!user.email) {
      toast.error("User not SignedIn!");
      return;
    } else {
      const updatedCart = [...cart];
      const index = cart.findIndex((p) => p.id === product.id);
      if (index === -1) {
        // item is not present add the cart
        updatedCart.push({ ...product, qty: 1 });
        setCartCount(cartCount + 1);
      } else {
        // item is already present increase the quantity
        updatedCart[index].qty++;
      }

      // set local and the firestore cartArray

      const docRef = doc(db, "users", user.id);
      await updateDoc(docRef, {
        cartArray: updatedCart,
      });
      setCart(updatedCart);
    }
  }

  return (
    <>
      <cartContext.Provider
        value={{ cartCount, setCartCount, setCart, handleAddToCart }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}
