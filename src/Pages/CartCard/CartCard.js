import { SignInButton } from "../../Components/Buttons/SignInButton";
import styles from "./CartCard.module.css";
export const CartCard = (props) => {
  const { item, total } = props;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={item.url} alt={item.name} className={styles.img} />
        </div>
        <div className={styles.info}>
          <p className={styles.price}>Price: &#8377; {item.price}</p>
          <p className={styles.qty}>Quantity: {item.qty}</p>
          <p className={styles.total}>Total: {total}</p>
        </div>
        <SignInButton text={"Buy Now"}/>
      </div>
    </>
  );
};
