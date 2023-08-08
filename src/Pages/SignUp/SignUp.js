import styles from "./SignUp.module.css";
import { SignInButton } from "../../Components/Buttons/SignInButton";

export const SignUp = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <form className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className={styles.input}
          />
          <SignInButton text={"Sign Up"} />
        </form>
      </div>
    </>
  );
};
