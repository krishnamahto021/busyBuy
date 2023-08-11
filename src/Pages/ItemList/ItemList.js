import { Item } from '../Item/Item';
import styles from './ItemList.module.css';
import { data } from '../../data';

export const ItemList = ()=>{
    
    return(
        <>
            <div className={styles.itemList}>
            {data.map((item)=>{
                return(
                    <>
                        <Item item={item} />
                    </>
                )
            })}

            </div>
        </>
    )
}