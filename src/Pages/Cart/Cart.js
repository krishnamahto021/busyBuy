import { useState } from 'react';
import { CartCard } from '../CartCard/CartCard';
import styles from './Cart.module.css';

export const Cart = ()=>{
    const data = [{
        id:1,
        url:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        name:"bag",
        price:"500",
        qty:0,
    }];
    const [total,setTotal] = useState(0);
    return(
        <>
            <div>
            <h1 className={styles.text}> Cart Items</h1>
            {data.map((item)=>{
                return(
                    <>
                    <div className={styles.container}>
                    <CartCard item={item} total={total}/>
                    <CartCard item={item} total={total}/>
                    <CartCard item={item} total={total}/>
                    </div>
                    </>

                )
            })}


            </div>
        </>
    )
}