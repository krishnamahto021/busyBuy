import styles from "./CartCard.module.css";
import { useCartContextValue } from "../../cartContext";


export const CartCard = (props) => {
  const { item} = props;
  const {handleRemoveFromCart} = useCartContextValue();
    return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={item.url} alt={item.name} className={styles.img} />
        </div>
        <div className={styles.info}>
          <p className={styles.price}>Price: &#8377; {item.price}</p>
          <p className={styles.qty}>Quantity: {item.qty}</p>
          <p className={styles.total}>Total: &#8377; {item.qty*item.price}</p>
        </div>
        <button className={styles.btn} >Buy Now</button><br />
        <button className={styles.btn} onClick={()=>handleRemoveFromCart(item)}>Remove</button>
      </div>
    </>
  );
};
