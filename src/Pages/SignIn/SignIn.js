import { SignInButton } from "../../Components/Buttons/SignInButton";
import styles from "./SignIn.module.css";
export const SignIn = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>SignIn</h1>
        <div className={styles.form}>
          <form>
            <input
              type="email"
              placeholder="Enter Email"
              required
              name="email"
            /> <br />
            <input
              type="password"
              placeholder="Enter Password"
              required
              name="password"
            /> <br />
            <SignInButton text={'Sign In'}/>
            <br />
            <a href="/users/sign-in" className={styles.text}>Or Sign Up Instead</a>
          </form>
        </div>
      </div>
    </>
  );
};
