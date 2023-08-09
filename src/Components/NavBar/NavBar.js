import styles from "./NavBar.module.css";
import home from "../../assets/home.png";
import signIn from "../../assets/signin.png";
import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
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
            <img src={signIn} alt="signIn"  className={styles.img}/>
            <span className={styles.text}>SignIn</span>
          </Link>
        </div>
      </div>
      <Outlet/>
    </>
  );
};
