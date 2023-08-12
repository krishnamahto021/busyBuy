import { useState } from "react";
import { SignInButton } from "../../Components/Buttons/SignInButton";
import styles from "./SignIn.module.css";
import { useUserContextValue } from "../../userAuthenticationContext";
import { Link } from "react-router-dom";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser } = useUserContextValue();

  function clearInput(){
    setEmail('');
    setPassword('');
  }


  async function handleSubmit(e) {
    e.preventDefault();
    // get the specified user from the database if present
    signInUser(email,password);
    clearInput();
  }
  return (
    <>
      <div className={styles.container}>
        <h1>SignIn</h1>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className={styles.input}
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className={styles.input}
            />{" "}
            <br />
            <SignInButton text={"Sign In"} />
            <br />
            <Link to="/users/sign-up" className={styles.text}>
              Or Sign Up Instead
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
