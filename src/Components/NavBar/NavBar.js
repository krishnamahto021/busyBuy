import styles from "./NavBar.module.css";
import home from "../../assets/home.png";
import signIn from "../../assets/signin.png";
import cart from '../../assets/cart.png';
import { Link, Outlet } from "react-router-dom";
import { useUserContextValue } from "../../userAuthenticationContext";

export const NavBar = () => {
  const {isAuthenticated} = useUserContextValue();
  return (
    <>
      <div className={styles.container}>
        <a href="/" className={styles.leftContainer}>BusyBuy</a>

        <div className={styles.rightContainer}>
          <Link to="/" className={styles.homeIcon}>
            <img src={home} alt="buybusy" className={styles.img}/>
            <span className={styles.text}>Home</span>
          </Link>
          <Link to='/users/sign-in' className={styles.authentication}>
            <img src={signIn} alt="cart"  className={styles.img}/>
            <span className={styles.text}>SignIn</span>
          </Link>

          {isAuthenticated?
            <Link to='/users/cart' className={styles.authentication}>
            <img src={cart} alt="signIn"  className={styles.img}/>
            <span className={styles.cartCount}>0</span>
          </Link>
          :null}
        </div>
      </div>
      <Outlet/>
    </>
  );
};
