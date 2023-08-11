import { useState } from "react";
import { SignInButton } from "../../Components/Buttons/SignInButton";
import styles from "./SignIn.module.css";
import { useUserContextValue } from "../../userAuthenticationContext";
import { db } from "../../firebaseinit";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cartArray,setCartArray] = useState([{}]);
  const { setIsAuthenticated,setUser } = useUserContextValue();

  function clearInput(){
    setEmail('');
    setPassword('');
  }


  async function handleSubmit(e) {
    e.preventDefault();
    // get the specified user from the database if present
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapShot = await getDocs(q);
    if (!querySnapShot.empty) {
      querySnapShot.forEach((doc) => {
        if (doc.data().password === password) {
          const id = doc.id;
          setIsAuthenticated(true);
          setUser({email,password,cartArray,id});
          toast.success('Logged in successfully');
        } else {
          setIsAuthenticated(false);
          toast.error('Wrong Password!');
        }
      });
    } else {
      toast.error("Email not Registered!");
    }
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
