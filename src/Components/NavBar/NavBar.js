import styles from "./NavBar.module.css";
import home from "../../assets/home.png";
import signIn from "../../assets/signin.png";

export const NavBar = () => {
  return (
    <>
      <div className={styles.container}>
        <a href="/" className={styles.leftContainer}>BusyBuy</a>

        <div className={styles.rightContainer}>
          <a href="/" className={styles.homeIcon}>
            <img src={home} alt="buybusy" />
            <span className={styles.text}>Home</span>
          </a>
          <a href='sign-in' className={styles.authentication}>
            <img src={signIn} alt="signIn" />
            <span className={styles.text}>SignIn</span>
          </a>
        </div>
      </div>
    </>
  );
};
