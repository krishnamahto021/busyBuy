import styles from "./Item.module.css";
import { SignInButton } from "../../Components/Buttons/SignInButton";

export const Item = () => {
  return (
    <>
      <div className={styles.item}>
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="item" className={styles.img} />
        <div className={styles.container}>
          <span className={styles.name}>Bag</span>
          <span className={styles.price}>&#8377; 500</span>
        </div>
        <SignInButton text={"Add to Cart"} />
      </div>
    </>
  );
};
