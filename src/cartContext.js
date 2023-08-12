import { createContext, useContext, useEffect, useState } from "react";
import { useUserContextValue } from "./userAuthenticationContext";
import { toast } from "react-toastify";
import { db } from "./firebaseinit";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

const cartContext = createContext();

export function useCartContextValue() {
  const value = useContext(cartContext);
  return value;
}

export function CustomCartContext({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const { user } = useUserContextValue();

  useEffect(() => {
    if (user.email) {
      // if user is signed in load cart
      loadCartFromFireStore();
    } else {
      // if user is not signed in
      setCart([]);
      setCartCount(0);
    }
  }, [user]);

  // load the cart items from the database
  async function loadCartFromFireStore() {
    const userDocRef = doc(db, "users",user.uid);
    const userDocSnapShot = await getDoc(userDocRef);

    if (userDocSnapShot.exists()) {
      const userData = userDocSnapShot.data();
      const signedInUserCartArray = userData.cartArray || [];
      setCart(signedInUserCartArray);
      setCartCount(signedInUserCartArray.length);
    } else {
      setCart([]);
      setCartCount(0);
    }
  }

  // create the cart items and update the user
  async function handleAddToCart(product) {
    if (!user.email) {
      toast.error("User not SignedIn!");
      return;
    } else {
      const updatedCart = [...cart];
      const index = cart.findIndex((p) => p.id === product.id);
      if (index === -1) {
        // item is not present add the cart
        updatedCart.unshift({ ...product, qty: 1 }); // to insert newly added element at the first
        setCartCount(cartCount + 1);
        toast.success("Item Added to the Cart");
      } else {
        // item is already present increase the quantity
        updatedCart[index].qty++;
        toast.success("Item quantity increased!");
      }

      // set local and the firestore cartArray

      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        cartArray: updatedCart,
      });
      setCart(updatedCart);
    }
  }

  // delte the cart item from the database

  async function handleRemoveFromCart(product) {
    if (!user.email) {
      toast.error("User not Signed In! ");
      return;
    } else {
      const updatedCart = [...cart];
      const index = cart.findIndex((p) => p.id === product.id);
      if (index === -1) {
        return;
      } else {
        if (updatedCart[index].qty > 1) {
          updatedCart[index].qty--;
          toast.success("Item Quantity Decreased!");
        } else {
          updatedCart.splice(index, 1);
          setCartCount(cartCount - 1);
          toast.success("Item Removed from the Cart");
        }
      }
      // modify local and the fireabase store
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        cartArray: updatedCart,
      });
      setCart(updatedCart);
    }
  }

  return (
    <>
      <cartContext.Provider
        value={{
          cartCount,
          cart,
          setCart,
          handleAddToCart,
          handleRemoveFromCart,
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}
