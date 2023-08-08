import { Item } from '../Item/Item';
import styles from './ItemList.module.css';

export const ItemList = ()=>{
    return(
        <>
            <div className={styles.itemList}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </>
    )
}