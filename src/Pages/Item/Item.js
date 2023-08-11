import styles from "./Item.module.css";
import { useCartContextValue } from "../../cartContext";

export const Item = (props) => {
  const {item} = props;
  const {handleAddToCart} = useCartContextValue();
  return (
    <>
      <div className={styles.item}>
        <img src={item.url} alt={item.name} className={styles.img} />
        <div className={styles.container}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>&#8377; {item.price}</span>
        </div> 
        <button className={styles.btn} onClick={()=>handleAddToCart(item)}>Add to Cart</button>
      </div>
    </>
  );
};
